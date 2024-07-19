import { Injectable, Injector } from '@angular/core';
import { ROUTES } from '@angular/router';
import { AppConfiguration, MpRouteConfiguration } from '../types,interfaces/AppConfiguration';
import { MpRoute } from '../types,interfaces/MpRoute';
import { getComponentClass, getImportFunction } from './componentClassFunctions';
import { ConfigResolver } from './config.resolver';
import {
  getComponentClass as customGetClass,
  getImportFunction as customGetImport,
  isCustomConfig,
} from './customComponentClassFunctions';

@Injectable()
export class RouteParserService {
  constructor(private injector: Injector) {}

  parseRoutesFromCOnfig({ routes }: AppConfiguration) {
    const parsed = routes.map((r) => this.parseRoute(r));
    this.injector.get(ROUTES).fill(parsed);
  }

  private parseRoute(route: MpRouteConfiguration): MpRoute {
    const { componentId, componentType, title, path, lazy, pathParameters, emptyRoute } = route;
    if (emptyRoute) {
      return {
        path,
        pathMatch: "full",
        children: [],
        data: {componentId: '', componentType: '404'}
      }
    }
    const loadComponent = isCustomConfig(componentType)
      ? customGetImport(componentType)
      : getImportFunction(componentType);
    const component = isCustomConfig(componentType)
      ? customGetClass(componentType)
      : getComponentClass(componentType);

    return {
      data: { componentId, componentType, ...(pathParameters && { pathParameters }) },
      title,
      path,
      resolve: { config: ConfigResolver },
      ...(lazy ? { loadComponent } : { component }),
    };
  }
}
