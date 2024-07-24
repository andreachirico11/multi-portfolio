import { ComponentConfigurationBase } from "../../../types,interfaces/ComponentConfigurationBase";
import { CardConfig } from "../../shared/card/card.config";

export interface CardSlideshowConfig extends ComponentConfigurationBase {
  vertical: boolean;
  grid?: Object; // TODO grid view if required, on the other hand will be flex
  cards: CardConfig[];
}


export type CardSlideshowType = 'CARD_SLIDESHOW';
