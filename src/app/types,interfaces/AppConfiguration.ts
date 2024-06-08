import { ComponentTypes } from "./ComponentTypes";

export interface MpRouteConfiguration {
  title: string;
  path: string;
  lazy: boolean;
  componentId: string;
  componentType: ComponentTypes;
}

export interface AppConfiguration {
  appId: string;
  routes: MpRouteConfiguration[];
}
