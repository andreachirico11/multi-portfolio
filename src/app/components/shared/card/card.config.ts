import { MpImageConfig } from "../../../types,interfaces/MpImageConfig";

export interface CardConfig {
  title?: string;
  content: string;
  topImg?: MpImageConfig;
}


export type CardType = 'CARD';
