import { isPlatformBrowser } from '@angular/common';
import { forkJoin } from 'rxjs';
import { ConfigService } from './app/application-config/config.service';
import {
  DEFAULT_APP_CONFIG,
  DEFAULT_COMPONENTS_CONFIG,
} from './app/application-config/defaultConfigs';
import { RouteParserService } from './app/application-config/route.parser.service';
import { MpTransferState } from './app/services/mpTransferState.service';

export function mpInitializer(
  configService: ConfigService,
  routerParserService: RouteParserService,
  transferState: MpTransferState,
  platformId: Object
) {
  return () =>
    new Promise<void>((res) => {
      if (isPlatformBrowser(platformId)) {
        routerParserService.parseRoutesFromCOnfig(transferState.getAppConfiguration());
        res();
      } else {
        forkJoin([
          configService.getConfigParsedForInitializer(),
          configService.getComponentConfigsParsedForInitializer(),
        ]).subscribe(([appConf, compConf]) => {
          if (!appConf || !compConf) {
            transferState.setAppConfiguration(DEFAULT_APP_CONFIG);
            transferState.setAppComponentsConfig(DEFAULT_COMPONENTS_CONFIG);
          } else {
            transferState.setAppConfiguration(appConf);
            transferState.setAppComponentsConfig(compConf);
          }
          routerParserService.parseRoutesFromCOnfig(transferState.getAppConfiguration());
          res();
        });
      }
    });
}
