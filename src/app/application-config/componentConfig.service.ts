import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { environment } from '../../environment.sample';
import { MpTransferState } from '../services/mpTransferState.service';
import { ComponentConfigs } from './ComponentConfigs';

@Injectable()
export class ComponentConfigService {
  constructor(
    private transferState: MpTransferState,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  loadComponentsConfig(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) return Promise.resolve();
    return firstValueFrom(
      this.http.get<ComponentConfigs>(environment.componentsConfigUrl).pipe(
        map((config) => {
          this.transferState.setAppComponentsConfig(config);
        })
      )
    );
  }
}
