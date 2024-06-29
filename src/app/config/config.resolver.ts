import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Params, ResolveFn } from '@angular/router';
import { ComponentConfigs } from './ComponentConfigs';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs';
import { isComponentIdentity } from '../types,interfaces/ComponentIdentity';
import { environment } from '../../environment.sample';

const addParametersToPath = (componentId: string, pathParameters: string[], routeParams: Params) =>
  pathParameters.reduce((actualPath, parameter) => actualPath + '_' + routeParams[parameter], componentId);

export const ConfigResolver: ResolveFn<ComponentConfigs> = ({ data, params }: ActivatedRouteSnapshot) =>
  inject(HttpClient)
    .get<{ [componentId: string]: ComponentConfigs }>(environment.componentsConfigUrl)
    .pipe(
      first(),
      map((globalC) => {
        if (!isComponentIdentity(data)) throw new Error('Route data invalid type');
        let { componentId, pathParameters } = data;
        if (pathParameters && pathParameters.length)
          componentId = addParametersToPath(componentId, pathParameters, params);
        return globalC[componentId];
      })
    );
