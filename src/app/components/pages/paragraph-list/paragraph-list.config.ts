import { ParagraphConfig } from "../../shared/paragraph/paragraph.config";

export interface ParagraphListComponentConfig {
  paragraphs: ParagraphConfig[],
  title?: string,
  flexAlignment?: 'left'
}


export type ParagraphListType = 'PARAGRAPH_LIST';
