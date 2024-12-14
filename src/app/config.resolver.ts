import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Params, ResolveFn } from '@angular/router';
import { MpTransferState } from './mpTransferState.service';
import {
  ComponentsConfigObject,
  isMpRouteData,
  ResolvedConfigs,
} from './types';

const addParametersToPath = (componentId: string, pathParameters: string[], routeParams: Params) =>
  pathParameters.reduce(
    (actualPath, parameter) => actualPath + '_' + routeParams[parameter],
    componentId
  );

export const ConfigResolver: ResolveFn<ResolvedConfigs> = ({
  data,
  params,
}: ActivatedRouteSnapshot) => {
  if (!isMpRouteData(data)) throw new Error('Route data invalid type');
  let { componentId, childrenIds, pathParameters } = data;
  if (pathParameters && pathParameters.length)
    componentId = addParametersToPath(componentId, pathParameters, params);
  const tState = inject(MpTransferState);
  const componentConfig =
    componentId === 'root'
      ? tState.getRootComponentConfig()
      : tState.getSingleComponentConfig(componentId);
  const childrenConfigs = (childrenIds || []).reduce(
    (acc, id) => ({ ...acc, [id]: tState.getSingleComponentConfig(id) }),
    {} as ComponentsConfigObject
  );
  return { componentConfig, ...(childrenConfigs && { childrenConfigs }) };
};
