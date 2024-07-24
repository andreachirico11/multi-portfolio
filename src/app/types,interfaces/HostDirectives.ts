import { ScrollIntoViewDirectiveType } from '../directives/scrollIntoView.directive';

export interface HostDirectiveConfig {
  directiveType: HostDiretiveType;
}

export type HostDiretiveType = ScrollIntoViewDirectiveType;
