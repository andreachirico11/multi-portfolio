import { CustomComponentsType } from "../components/custom/custom.config";
import { ComponentTypes } from "../config/ComponentTypes";

interface MpRouteShared {
  title: string;
  path: string;
  lazy: boolean;
  componentId: string;
  pathParameters?: string[]
}

export interface MpRouteConfiguration extends MpRouteShared {
  componentType: ComponentTypes;
}

export interface MpCustomRouteConfiguration extends MpRouteShared {
  componentType: CustomComponentsType;
}


export interface AppConfiguration {
  appId: string;
  routes: MpRouteConfiguration[];
}

