import { NavbarType } from "../components/shared/navbar/navbar.config";
import { ParagraphListType } from "../components/pages/paragraph-list/paragraph-list.config";
import { VimeoType } from "../components/pages/vimeo/vimeo.config";
import { CardSlideshowType } from "../components/pages/card-slideshow/card-slideshow.config";
import { CardType } from "../components/shared/card/card.config";
import { FormType } from "../components/shared/form/form.config";
import { Component404Type } from "../components/shared/404/404.config";
import { AppComponentType } from "../app.component.config";

export type ComponentTypes = Component404Type | NavbarType | ParagraphListType | VimeoType | CardSlideshowType | CardType | FormType | AppComponentType;
