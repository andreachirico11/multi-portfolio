import { Injectable, Injector } from '@angular/core';
import { ROUTES } from '@angular/router';
import { AppConfiguration, MpRouteConfiguration } from '../types,interfaces/AppConfiguration';
import { MpRoute } from '../types,interfaces/MpRoute';
import { getComponentClass, getImportFunction } from './componentClassFunctions';
import { ConfigResolver } from './config.resolver';

@Injectable()
export class ConfigService {
  constructor(private injector: Injector) {}

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
              loadComponent: getImportFunction(componentType),
            }
          : { component: getComponentClass(componentType) }),
      };
    });
  }


}
