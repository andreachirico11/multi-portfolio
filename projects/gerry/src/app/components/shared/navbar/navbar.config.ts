import { NavigationAction } from "../../../../../../../src/app/types";
import { ComponentConfigurationBase } from "../../../types,interfaces/ComponentConfigurationBase";

export interface NavbarConfig extends ComponentConfigurationBase {
  wrapperClass?: string;
  title?: string;
  anchors: {
    label: string;
    action: NavigationAction
  }[];
}

export type NavbarType = "NAVBAR";
