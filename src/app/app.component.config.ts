import { NavbarConfig } from "./components/shared/navbar/navbar.config";
import { ComponentConfigurationBase } from "./types,interfaces/ComponentConfigurationBase";

interface ContentProjectedChildren {
  componentId: string,
  outletId: string;
}


export interface AppComponentConfig extends ComponentConfigurationBase {
  navbar1?: ContentProjectedChildren;
  navbar2?: ContentProjectedChildren;
}

export type AppComponentType = 'APPCOMPONENT';
