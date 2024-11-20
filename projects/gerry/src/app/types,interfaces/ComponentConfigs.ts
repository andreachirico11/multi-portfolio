import { NavbarConfig } from '../components/shared/navbar/navbar.config';
import { ParagraphListComponentConfig } from '../components/pages/paragraph-list/paragraph-list.config';
import { CardSlideshowConfig } from '../components/pages/card-slideshow/card-slideshow.config';
import { CardConfig } from '../components/shared/card/card.config';
import { FormConfig } from '../components/shared/form/form.config';
import { Component404Config } from '../components/shared/404/404.config';
import { AppComponentConfig } from '../app.component.config';

export type ComponentConfigs = AppComponentConfig
  | Component404Config
  | NavbarConfig
  | ParagraphListComponentConfig
  | CardSlideshowConfig
  | CardConfig
  | FormConfig;
