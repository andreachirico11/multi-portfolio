import { CardSlideshowComponent } from '../components/pages/card-slideshow/card-slideshow.component';
import { ContactComponent } from '../components/pages/contact/contact.component';
import { ParagraphListComponent } from '../components/pages/paragraph-list/paragraph-list.component';
import { VimeoComponent } from '../components/pages/vimeo/vimeo.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { ComponentTypes } from './ComponentTypes';

export function getImportFunction(type: ComponentTypes) {
  switch (type) {
    case 'PARAGRAPH_LIST':
      return () =>
        import('../components/pages/paragraph-list/paragraph-list.component').then(
          ({ ParagraphListComponent }) => ParagraphListComponent
        );

    case 'CONTACT':
      return () =>
        import('../components/pages/contact/contact.component').then(
          ({ ContactComponent }) => ContactComponent
        );

    case 'VIMEO':
      return () =>
        import('../components/pages/vimeo/vimeo.component').then(
          ({ VimeoComponent }) => VimeoComponent
        );

    case 'CARD_SLIDESHOW':
      return () =>
        import('../components/pages/card-slideshow/card-slideshow.component').then(
          ({ CardSlideshowComponent }) => CardSlideshowComponent
        );

    // Todo CREARE DEFAULT
    case 'NAVBAR':
    default:
      return () =>
        import('../components/shared/navbar/navbar.component').then(
          ({ NavbarComponent }) => NavbarComponent
        );
  }
}

export function getComponentClass(type: ComponentTypes) {
  switch (type) {
    case 'PARAGRAPH_LIST':
      return ParagraphListComponent;

    case 'CONTACT':
      return ContactComponent;

    case 'CARD_SLIDESHOW':
      return CardSlideshowComponent;

    case 'VIMEO':
      return VimeoComponent;

    // Todo CREARE DEFAULT
    case 'NAVBAR':
    default:
      return NavbarComponent;
  }
}
