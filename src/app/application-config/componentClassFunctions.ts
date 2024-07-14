import { CardSlideshowComponent } from '../components/pages/card-slideshow/card-slideshow.component';
import { ParagraphListComponent } from '../components/pages/paragraph-list/paragraph-list.component';
import { Error404Component } from '../components/shared/404/404.component';
import { CardComponent } from '../components/shared/card/card.component';
import { FormComponent } from '../components/shared/form/form.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { ComponentTypes } from './ComponentTypes';

export function getImportFunction(type: ComponentTypes) {
  switch (type) {
    case 'PARAGRAPH_LIST':
      return () =>
        import('../components/pages/paragraph-list/paragraph-list.component').then(
          ({ ParagraphListComponent }) => ParagraphListComponent
        );

    case 'CARD_SLIDESHOW':
      return () =>
        import('../components/pages/card-slideshow/card-slideshow.component').then(
          ({ CardSlideshowComponent }) => CardSlideshowComponent
        );

    case 'CARD':
      return () =>
        import('../components/shared/card/card.component').then(
          ({ CardComponent }) => CardComponent
        );

    case 'FORM':
      return () =>
        import('../components/shared/form/form.component').then(
          ({ FormComponent }) => FormComponent
        );

    // Todo CREARE DEFAULT
    case 'NAVBAR':
      return () =>
        import('../components/shared/navbar/navbar.component').then(
          ({ NavbarComponent }) => NavbarComponent
        );

    case '404':
    default:
      return () =>
        import('../components/shared/404/404.component').then(
          ({ Error404Component }) => Error404Component
        );
  }
}

export function getComponentClass(type: ComponentTypes) {
  switch (type) {
    case 'PARAGRAPH_LIST':
      return ParagraphListComponent;

    case 'CARD_SLIDESHOW':
      return CardSlideshowComponent;

    case 'CARD':
      return CardComponent;

    case 'FORM':
      return FormComponent;

    case 'NAVBAR':
      return NavbarComponent;
    case '404':
    default:
      return Error404Component;
  }
}
