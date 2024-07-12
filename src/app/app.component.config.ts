import { NavbarConfig } from "./components/shared/navbar/navbar.config";

interface ContentProjectedChildren {
  componentId: string,
  outletId: string;
}


export interface AppComponentConfig {
  navbar1?: ContentProjectedChildren;
  navbar2?: ContentProjectedChildren;
}

export type AppComponentType = 'APPCOMPONENT';
