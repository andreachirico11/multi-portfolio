import { isPlatformBrowser } from '@angular/common';
import { ConfigService } from './application-config/config.service';
import { DEFAULT_COMPONENTS_CONFIG } from './application-config/defaultConfigs';
import { MpTransferState } from './services/mpTransferState.service';

export function mpInitializer(
  configService: ConfigService,
  transferState: MpTransferState,
  platformId: Object
) {
  return () =>
    new Promise<void>((res) => {
      if (isPlatformBrowser(platformId)) {
        return res();
      }
      configService.getComponentConfigsParsedForInitializer().subscribe((compConf) => {
        transferState.setAppComponentsConfig(!compConf ? DEFAULT_COMPONENTS_CONFIG : compConf);
        res();
      });
    });
}
