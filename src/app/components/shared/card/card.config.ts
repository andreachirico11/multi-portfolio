import { MpImageConfig } from "../../../types,interfaces/MpImageConfig";

export type Position = "right";
export interface CardConfig {
  title?: string;
  content: string;
  topImg?: MpImageConfig;
  cardSlideshow?: {
    position: Position,
    images: MpImageConfig[]
  }
}


export type CardType = 'CARD';
