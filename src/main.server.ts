import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  mergeApplicationConfig,
  PLATFORM_ID
} from '@angular/core';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { mpInitializer } from './app/app.initializer';
import { ConfigService } from './app/config.service';
import { AppComponent } from './app/app.component';
import { MpTransferState } from './app/mpTransferState.service';



const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const browserConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'gerry',
        loadChildren: () =>
          import('../projects/gerry/src/app/gerry-app.module').then(
            ({ GerryAppModule }) => GerryAppModule
          ),
      },
    ]),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    MpTransferState,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      deps: [ConfigService, MpTransferState, PLATFORM_ID, HttpClient],
      useFactory: mpInitializer,
      multi: true,
    },
  ],
};

const bootstrap = () =>
  bootstrapApplication(AppComponent, mergeApplicationConfig(serverConfig, browserConfig));

export default bootstrap;
