import { ComponentConfigurationBase } from "../../../types,interfaces/ComponentConfigurationBase";

export interface NavbarConfig extends ComponentConfigurationBase {
  wrapperClass?: string;
  title?: string;
  anchors: {
    label: string;
    routerLink?: string;
  }[];
}

export type NavbarType = "NAVBAR";
