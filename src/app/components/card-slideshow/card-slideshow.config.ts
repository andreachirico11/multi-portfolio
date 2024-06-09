import { CardConfig } from "../card/card.config";

export interface CardSlideshowConfig {
  vertical: boolean;
  grid?: Object; // TODO grid view if required, on the other hand will be flex
  cards: CardConfig[];
}


export type CardSlideshowType = 'CARD_SLIDESHOW';
