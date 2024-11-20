import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { APP_INITIALIZER, ApplicationConfig, PLATFORM_ID, mergeApplicationConfig } from "@angular/core";
import { bootstrapApplication, provideClientHydration } from "@angular/platform-browser";
import { provideServerRendering } from "@angular/platform-server";
import { provideRouter } from "@angular/router";
import { GerryAppComponent } from "./app/gerry-app.component";
import { mpInitializer } from "../../../src/app/app.initializer";
import { routes } from "./app/app.routes";
import { ConfigService } from "../../../src/app/config.service";
import { MpTransferState } from "../../../src/app/mpTransferState.service";


const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const browserConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
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
  bootstrapApplication(GerryAppComponent, mergeApplicationConfig(serverConfig, browserConfig));

export default bootstrap;
