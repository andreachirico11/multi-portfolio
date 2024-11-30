import { NavbarConfig } from '../components/shared/navbar/navbar.config';
import { ParagraphListComponentConfig } from '../components/pages/paragraph-list/paragraph-list.config';
import { CardSlideshowConfig } from '../components/pages/card-slideshow/card-slideshow.config';
import { CardConfig } from '../components/shared/card/card.config';
import { FormConfig } from '../components/shared/form/form.config';
import { Component404Config } from '../components/shared/404/404.config';
import { GerryAppComponentConfig } from '../gerry-app.config';

export type ComponentConfigs = GerryAppComponentConfig
  | Component404Config
  | NavbarConfig
  | ParagraphListComponentConfig
  | CardSlideshowConfig
  | CardConfig
  | FormConfig;
