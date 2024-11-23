import { isPlatformBrowser } from '@angular/common';
import { ConfigService } from './config.service';
import { DEFAULT_COMPONENTS_CONFIG } from '../../projects/gerry/src/app/application-config/defaultConfigs';
import { MpTransferState } from './mpTransferState.service';
import { RouteInjectorService } from './route.injector.service';

export function mpInitializer(
  configService: ConfigService,
  transferState: MpTransferState,
  platformId: Object,
  routeInj: RouteInjectorService
) {
  return () =>
    new Promise<void>((res) => {
      routeInj.addRoutesAccordingToEnvironment()
      if (isPlatformBrowser(platformId)) {
        return res();
      }
      configService.getComponentConfigsParsedForInitializer().subscribe((compConf) => {
        transferState.setAppComponentsConfig(!compConf ? DEFAULT_COMPONENTS_CONFIG : compConf);
        res();
      });
    });
}
