import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, mergeApplicationConfig, PLATFORM_ID } from '@angular/core';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { RouteParserService } from './app/application-config/route.parser.service';
import { MpTransferState } from './app/services/mpTransferState.service';
import { mpInitializer } from './app.initializer';
import { ConfigService } from './app/application-config/config.service';



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
    ConfigService,
    {
      provide: APP_INITIALIZER,
      deps: [ConfigService, RouteParserService, MpTransferState, PLATFORM_ID, HttpClient],
      useFactory: mpInitializer,
      multi: true,
    },
  ],
};

const bootstrap = () =>
  bootstrapApplication(AppComponent, mergeApplicationConfig(serverConfig, browserConfig));

export default bootstrap;
