import { APP_INITIALIZER, ApplicationConfig, Injectable, Injector } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { ConfigService } from './config/config.service';
import { AppConfiguration } from './types,interfaces/AppConfiguration';

export const getAppCofing = (c: AppConfiguration): ApplicationConfig => ({
  providers: [
    provideRouter([]),
    provideClientHydration(),
    provideHttpClient(),
    ConfigService,
    {
      provide: APP_INITIALIZER,
      deps: [ConfigService],
      useFactory(configService: ConfigService) {
        return () => configService.load(c);
      },
      multi: true,
    },
  ],
});
