import { ConmponentConfigs } from "./ComponentConfigs";
import { ComponentTypes } from "./ComponentTypes";

export interface ComponentIdentity {
  componentId: string;
  componentType: ComponentTypes;
}

export interface ComponentRouteData<ComponentConfig> extends ComponentIdentity {
  config: ComponentConfig;
}


