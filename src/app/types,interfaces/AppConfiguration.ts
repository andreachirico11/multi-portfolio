import { CustomComponentsType } from "../components/custom/custom.config";
import { ComponentTypes } from "../application-config/ComponentTypes";
import { AppComponentConfig } from "../app.component.config";

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
  rootComponentConfig: AppComponentConfig;
  routes: MpRouteConfiguration[];
}

