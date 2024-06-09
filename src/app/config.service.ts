import { Injectable, Injector } from '@angular/core';
import { ROUTES } from '@angular/router';
import { AppConfiguration, MpRouteConfiguration } from './types,interfaces/AppConfiguration';
import { ComponentTypes } from './types,interfaces/ComponentTypes';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { VimeoComponent } from './components/vimeo/vimeo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfigResolver } from './config.resolver';
import { HttpClient } from '@angular/common/http';
import { MpRoute } from './types,interfaces/MpRoute';
import { CardSlideshowComponent } from './components/card-slideshow/card-slideshow.component';

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
      case 'ABOUT':
        return () =>
          import('./components/about/about.component').then(({ AboutComponent }) => AboutComponent);

      case 'CONTACT':
        return () =>
          import('./components/contact/contact.component').then(
            ({ ContactComponent }) => ContactComponent
          );

      case 'VIMEO':
        return () =>
          import('./components/vimeo/vimeo.component').then(({ VimeoComponent }) => VimeoComponent);

      case 'CARD_SLIDESHOW':
        return () =>
          import('./components/card-slideshow/card-slideshow.component').then(
            ({ CardSlideshowComponent }) => CardSlideshowComponent
          );

      // Todo CREARE DEFAULT
      case 'NAVBAR':
      default:
        return () =>
          import('./components/navbar/navbar.component').then(
            ({ NavbarComponent }) => NavbarComponent
          );
    }
  }

  private getComponentClass(type: ComponentTypes) {
    switch (type) {
      case 'ABOUT':
        return AboutComponent;

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
