import { isPlatformBrowser } from '@angular/common';
import { ConfigService } from './config.service';
import { MpTransferState } from './mpTransferState.service';
import { RouteInjectorService } from './route.injector.service';
import { defaultConfig } from './types';

export function mpInitializer(
  configService: ConfigService,
  transferState: MpTransferState,
  platformId: Object,
  routeInj: RouteInjectorService
) {
  return () =>
    new Promise<void>((res) => {
      if (isPlatformBrowser(platformId)) {
        routeInj.addRoutesAccordingToEnvironment(transferState.getAppComponentsConfig());
        return res();
      }
      configService.getComponentConfigsParsedForInitializer().subscribe((compConf) => {
        transferState.setAppComponentsConfig(compConf || defaultConfig);
        routeInj.addRoutesAccordingToEnvironment(transferState.getAppComponentsConfig());
        res();
      });
    });
}
