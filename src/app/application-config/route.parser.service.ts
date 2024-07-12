import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { ROUTES } from '@angular/router';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import { environment } from '../../environment.sample';
import { MpTransferState } from '../services/mpTransferState.service';
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
  constructor(
    private transferState: MpTransferState,
    private injector: Injector,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  loadConfig(defaultAppConfig: AppConfiguration) {
    return firstValueFrom(
      (isPlatformServer(this.platformId)
        ? this.getConfigFromServer(defaultAppConfig)
        : this.getConfigFromTransferstate(defaultAppConfig)
      ).pipe(
        map((c) => {
          if (JSON.stringify(c) === '{}') {
            console.error('Error retrieving app configuration');
            return false;
          }
          this.transferState.setAppConfiguration(c);
          this.injector.get(ROUTES).fill(this.parseRoutes(c.routes));
          return true;
        })
      )
    );
  }

  private getConfigFromTransferstate(defaultAppConfig: AppConfiguration) {
    return of(this.transferState.getAppConfiguration(defaultAppConfig));
  }

  private getConfigFromServer(defaultAppConfig: AppConfiguration) {
    console.log('Getting config from http');
    return this.http.get<AppConfiguration>(environment.configUrl).pipe(
      catchError((e) => {
        console.log('error getting http config');
        return of(defaultAppConfig);
      })
    );
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
        data: { componentId, componentType, ...(pathParameters && { pathParameters }) },
        title,
        path,
        resolve: { config: ConfigResolver },
        ...(lazy ? { loadComponent } : { component }),
      };
    });
  }

}
