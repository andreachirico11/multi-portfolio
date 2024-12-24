import { Data, Route } from '@angular/router';
import { ComponentConfigs } from '../../projects/gerry/src/app/types,interfaces/ComponentConfigs';
import { ComponentConfigurationBase } from '../../projects/gerry/src/app/types,interfaces/ComponentConfigurationBase';

export type ComponentsConfigObject = {
  [componentId: string]: ComponentConfigs;
};

export type RootComponentConfigObject = ComponentConfigurationBase & {
  componentId: string;
  childrenIds?: string[];
  tabTitle?: string;
  favicon: string;
};

export type ComponentConfigObject = {
  rootRouteData: RootComponentConfigObject;
  components: ComponentsConfigObject;
};

export const defaultConfig: ComponentConfigObject = {
  rootRouteData: { componentId: 'root', favicon: 'favicon' },
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

export type ActionType = "accept" | "reject" | "back" | "continue"
