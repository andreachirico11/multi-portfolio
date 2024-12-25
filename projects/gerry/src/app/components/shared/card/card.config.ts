import { NavigationAction } from "../../../../../../../src/app/types";
import { ComponentConfigurationBase } from "../../../types,interfaces/ComponentConfigurationBase";
import { MpImageConfig } from "../../../types,interfaces/MpImageConfig";

export type Position = "right";
export interface CardConfig extends ComponentConfigurationBase {
  title?: string;
  content: string;
  topImg?: MpImageConfig;
  leftImg?: MpImageConfig;
  cardSlideshow?: {
    position: Position;
    images: MpImageConfig[];
  };
  imgNavigation?: NavigationAction
}
