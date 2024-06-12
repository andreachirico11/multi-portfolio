import { Injectable, Injector } from '@angular/core';
import { ROUTES } from '@angular/router';
import { AppConfiguration, MpRouteConfiguration } from './types,interfaces/AppConfiguration';
import { ComponentTypes } from './types,interfaces/ComponentTypes';
import { ContactComponent } from './components/pages/contact/contact.component';
import { VimeoComponent } from './components/pages/vimeo/vimeo.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ConfigResolver } from './config.resolver';
import { HttpClient } from '@angular/common/http';
import { MpRoute } from './types,interfaces/MpRoute';
import { ParagraphListComponent } from './components/pages/paragraph-list/paragraph-list.component';
import { CardSlideshowComponent } from './components/pages/card-slideshow/card-slideshow.component';

@Injectable()
export class ConfigService {
  constructor(private injector: Injector, private http: HttpClient) {}

  async load(c: AppConfiguration): Promise<void> {
    const parsedRoutes = this.parseRoutes(c.routes);
    this.injector.get(ROUTES).push(parsedRoutes);
    return Promise.resolve();
  }

  private parseRoutes(routes: MpRouteConfiguration[]): MpRoute[] {
    return routes.map(({ componentId, componentType, title, path, lazy }) => {
      return {
        data: { componentId, componentType },
        title,
        path,
        resolve: { config: ConfigResolver },
        ...(lazy
          ? {
              loadComponent: this.getImportFunction(componentType),
            }
          : { component: this.getComponentClass(componentType) }),
      };
    });
  }

  private getImportFunction(type: ComponentTypes) {
    switch (type) {
      case 'PARAGRAPH_LIST':
        return () =>
          import('./components/pages/paragraph-list/paragraph-list.component').then(({ ParagraphListComponent }) => ParagraphListComponent);

      case 'CONTACT':
        return () =>
          import('./components/pages/contact/contact.component').then(
            ({ ContactComponent }) => ContactComponent
          );

      case 'VIMEO':
        return () =>
          import('./components/pages/vimeo/vimeo.component').then(({ VimeoComponent }) => VimeoComponent);

      case 'CARD_SLIDESHOW':
        return () =>
          import('./components/pages/card-slideshow/card-slideshow.component').then(
            ({ CardSlideshowComponent }) => CardSlideshowComponent
          );

      // Todo CREARE DEFAULT
      case 'NAVBAR':
      default:
        return () =>
          import('./components/shared/navbar/navbar.component').then(
            ({ NavbarComponent }) => NavbarComponent
          );
    }
  }

  private getComponentClass(type: ComponentTypes) {
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
}
