import { NavigationAction } from "../../../../../../../src/app/types";
import { MpImageConfig } from "../../../types,interfaces/MpImageConfig";

export interface ParagraphConfig {
  content: string;
  title?: string;
  icon?: {
    image: MpImageConfig;
    position: 'top' | 'left' | 'right' | 'bottom';
  };
  navigateOnClick?: NavigationAction;
  hoverClass?: boolean;
}

export type ParagraphType = 'PARAGRAPH';
