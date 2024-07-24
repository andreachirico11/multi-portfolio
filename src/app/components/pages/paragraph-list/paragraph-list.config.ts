import { ComponentConfigurationBase } from "../../../types,interfaces/ComponentConfigurationBase";
import { ParagraphConfig } from "../../shared/paragraph/paragraph.config";

export interface ParagraphListComponentConfig extends ComponentConfigurationBase {
  paragraphs: ParagraphConfig[],
  title?: string,
  flexAlignment?: 'left'
}


export type ParagraphListType = 'PARAGRAPH_LIST';
