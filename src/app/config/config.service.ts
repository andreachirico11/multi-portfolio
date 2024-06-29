import { Injectable, Injector } from '@angular/core';
import { ROUTES } from '@angular/router';
import { AppConfiguration, MpRouteConfiguration } from '../types,interfaces/AppConfiguration';
import { MpRoute } from '../types,interfaces/MpRoute';
import { getComponentClass, getImportFunction } from './componentClassFunctions';
import { getComponentClass as customGetClass, getImportFunction as customGetImport, isCustomConfig } from './customComponentClassFunctions';

import { ConfigResolver } from './config.resolver';
import { environment } from '../../environment.sample';

@Injectable()
export class ConfigService {
  constructor(private injector: Injector) {}

  async load(c: AppConfiguration): Promise<void> {
    const parsedRoutes = this.parseRoutes(c.routes);
    if (!environment.production) {
      console.log("ROUTES");
      console.log(parsedRoutes);
      console.log('------------');
    }
    this.injector.get(ROUTES).push(parsedRoutes);
    return Promise.resolve();
  }

  private parseRoutes(routes: MpRouteConfiguration[]): MpRoute[] {
    return routes.map(({ componentId, componentType, title, path, lazy, pathParameters }) => {

      const loadComponent = isCustomConfig(componentType)
        ? customGetImport(componentType)
        : getImportFunction(componentType);
      const component = isCustomConfig(componentType)
        ? customGetClass(componentType)
        : getComponentClass(componentType);

      return {
        data: { componentId, componentType, pathParameters },
        title,
        path,
        resolve: { config: ConfigResolver },
        ...(lazy ? {loadComponent}: {component}),
      };
    });
  }


}
