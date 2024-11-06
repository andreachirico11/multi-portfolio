import { MpImageConfig } from "../../../types,interfaces/MpImageConfig";

export interface ParagraphConfig {
  content: string;
  title?: string;
  icon?: {
    image: MpImageConfig,
    position: 'top' | 'left' | 'right' | 'bottom'
  };
  navigateOnClick?: {
    url: string;
    navType: 'router' | 'window';
  }
}

export type ParagraphType = 'PARAGRAPH';
