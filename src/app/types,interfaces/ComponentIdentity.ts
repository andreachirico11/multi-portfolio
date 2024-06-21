import { ComponentTypes } from "../config/ComponentTypes";

export interface ComponentIdentity {
  componentId: string;
  componentType: ComponentTypes;
}

export interface ComponentRouteData<ComponentConfig> extends ComponentIdentity {
  config: ComponentConfig;
}


