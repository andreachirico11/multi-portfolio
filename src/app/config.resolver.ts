import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ConmponentConfigs } from './types,interfaces/ComponentConfigs';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs';
import { ComponentIdentity } from './types,interfaces/ComponentIdentity';
import { environment } from '../environment.sample';

export const ConfigResolver: ResolveFn<ConmponentConfigs> = ({ data }: ActivatedRouteSnapshot) =>
  inject(HttpClient)
    .get<{ [componentId: string]: ConmponentConfigs }>(environment.componentsConfigUrl)
    .pipe(
      first(),
      map((globalC) => globalC[(data as ComponentIdentity).componentId])
    );
