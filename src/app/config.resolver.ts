import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ComponentConfigs } from './types,interfaces/ComponentConfigs';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs';
import { ComponentIdentity } from './types,interfaces/ComponentIdentity';
import { environment } from '../environment.sample';

export const ConfigResolver: ResolveFn<ComponentConfigs> = ({ data }: ActivatedRouteSnapshot) =>
  inject(HttpClient)
    .get<{ [componentId: string]: ComponentConfigs }>(environment.componentsConfigUrl)
    .pipe(
      first(),
      map((globalC) => globalC[(data as ComponentIdentity).componentId])
    );
