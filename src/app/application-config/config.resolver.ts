import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Params, ResolveFn } from '@angular/router';
import { MpTransferState } from '../services/mpTransferState.service';
import { isComponentIdentity } from '../types,interfaces/ComponentIdentity';
import { ComponentConfigs } from './ComponentConfigs';

const addParametersToPath = (componentId: string, pathParameters: string[], routeParams: Params) =>
  pathParameters.reduce(
    (actualPath, parameter) => actualPath + '_' + routeParams[parameter],
    componentId
  );

export const ConfigResolver: ResolveFn<ComponentConfigs> = ({
  data,
  params,
}: ActivatedRouteSnapshot) => {
  if (!isComponentIdentity(data)) throw new Error('Route data invalid type');
  let { componentId, pathParameters } = data;
  if (pathParameters && pathParameters.length)
    componentId = addParametersToPath(componentId, pathParameters, params);
  return inject(MpTransferState).getSingleComponentConfig(componentId);
};
