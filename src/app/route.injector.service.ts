import { Injectable, Injector, NgModule, Type } from '@angular/core';
import { Route, ROUTES } from '@angular/router';
import * as rootComponents from './app.roots.routes';
import { environment as e } from '../environment.sample';
import { ConfigResolver } from './config.resolver';
import { ComponentConfigObject, MpRoute } from './types';

@Injectable()
export class RouteInjectorService {
  private appIds = e.appIds.split(',');

  constructor(private injector: Injector) {}

  addRoutesAccordingToEnvironment(configs: ComponentConfigObject) {
    this.injector
      .get(ROUTES)
      .fill(e.production ? this.generateProdRoute(configs) : this.generateDevRoutes(configs));
  }

  private generateDevRoutes({ rootRouteData }: ComponentConfigObject): MpRoute[] {
    return this.appIds.map((path) => {
      const output: MpRoute = {
        path,
        title: path,
        data: { ...rootRouteData },
        resolve: {resolvedConfigs: ConfigResolver} ,
        loadChildren: () =>
          import('./app.modules').then(
            (moduleFile: { [key: string]: Type<NgModule> }) => moduleFile[path]
          ),
      };
      return output;
    });
  }

  private generateProdRoute({ rootRouteData }: ComponentConfigObject): MpRoute[] {
    const appId = this.appIds[0];
    const route = (rootComponents as { [key: string]: Route })[appId];
    return [
      {
        ...route,
        title: e.prodAppTabName,
        data: { ...rootRouteData },
        resolve: {resolvedConfigs: ConfigResolver},
      },
    ];
  }
}
