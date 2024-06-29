import { Data } from "@angular/router";
import { ComponentTypes } from "../config/ComponentTypes";

export interface ComponentIdentity {
  componentId: string;
  componentType: ComponentTypes;
  pathParameters?: string[]
}

export interface ComponentRouteData<ComponentConfig> extends ComponentIdentity {
  config: ComponentConfig;
}

export function isComponentIdentity(data: Data): data is ComponentIdentity {
  return !!data['componentId'];
}


