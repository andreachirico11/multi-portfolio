import { Injectable, Injector, NgModule, Type } from '@angular/core';
import { Route, ROUTES } from '@angular/router';
import * as rootComponents from './app.roots.routes';
import { environment as e } from '../environment.sample';

@Injectable()
export class RouteInjectorService {
  private appIds = e.appIds.split(',');

  constructor(private injector: Injector) {}

  addRoutesAccordingToEnvironment() {
    this.injector
      .get(ROUTES)
      .fill(e.production ? this.generateProdRoute() : this.generateDevRoutes());
  }

  private generateDevRoutes(): Route[] {
    return this.appIds.map((path) => {
      const output: Route = {
        path,
        title: path,
        loadChildren: () =>
          import('./app.modules').then(
            (moduleFile: { [key: string]: Type<NgModule> }) => moduleFile[path]
          ),
      };

      return output;
    });
  }

  private generateProdRoute(): Route[] {
    const appId = this.appIds[0];
    const route = (rootComponents as { [key: string]: Route })[appId];
    return [{...route, title: e.prodAppTabName}];
  }
}
