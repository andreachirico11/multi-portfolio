import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  mergeApplicationConfig,
  PLATFORM_ID,
} from '@angular/core';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { mpInitializer } from './app/app.initializer';
import { ConfigService } from './app/config.service';
import { MpTransferState } from './app/mpTransferState.service';
import { RouteInjectorService } from './app/route.injector.service';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const browserConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    MpTransferState,
    ConfigService,
    RouteInjectorService,
    {
      provide: APP_INITIALIZER,
      deps: [ConfigService, MpTransferState, PLATFORM_ID, RouteInjectorService, HttpClient],
      useFactory: mpInitializer,
      multi: true,
    },
  ],
};

const bootstrap = () =>
  bootstrapApplication(AppComponent, mergeApplicationConfig(serverConfig, browserConfig));

export default bootstrap;
