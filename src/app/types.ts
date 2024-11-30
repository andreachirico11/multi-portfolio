import { ActivatedRouteSnapshot, Data, Route } from '@angular/router';
import { ComponentConfigs } from '../../projects/gerry/src/app/types,interfaces/ComponentConfigs';

export type ComponentsConfigObject = {
  [componentId: string]: ComponentConfigs;
};

export type ComponentConfigObject = {
  rootRouteData: { componentId: string; childrenIds?: string[] };
  components: ComponentsConfigObject;
};

export const defaultConfig: ComponentConfigObject = {
  rootRouteData: { componentId: 'root' },
  components: {},
} as const;

export interface MpRoute extends Route {
  data: MpRouteData;
}

export type MpRouteData = {
  componentId: string;
  childrenIds?: string[];
  pathParameters?: string[];
};

export type ResolvedConfigs = {
    componentConfig: ComponentConfigs;
    childrenConfigs?: ComponentsConfigObject;
  };

export type MpRouteDataExtended = MpRouteData & {
  resolvedConfigs: ResolvedConfigs;
};

export function isMpRouteData(d: Data): d is MpRouteData {
  return typeof d === 'object' && d !== null && 'componentId' in d;
}
