import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { RouteParserService } from './app/application-config/route.parser.service';
import { AppConfiguration } from './app/types,interfaces/AppConfiguration';
import { MpTransferState } from './app/services/mpTransferState.service';
import { ComponentConfigService } from './app/application-config/componentConfig.service';

const defaultAppConfig: AppConfiguration = {
  appId: 'default',
  rootComponentConfig: {},
  routes: [
    {
      componentId: '404',
      componentType: '404',
      lazy: false,
      title: 'error',
      path: '',
    },
  ],
};

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const browserConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    RouteParserService,
    MpTransferState,
    ComponentConfigService,
    {
      provide: APP_INITIALIZER,
      deps: [RouteParserService, ComponentConfigService, HttpClient, MpTransferState],
      useFactory(
        configService: RouteParserService,
        componentConfigService: ComponentConfigService
      ) {
        return () =>
          configService
            .loadConfig(defaultAppConfig)
            .then((hasLoaded) =>
              hasLoaded ? componentConfigService.loadComponentsConfig() : Promise.resolve()
            );
      },
      multi: true,
    },
  ],
};

const bootstrap = () =>
  bootstrapApplication(AppComponent, mergeApplicationConfig(serverConfig, browserConfig));

export default bootstrap;
