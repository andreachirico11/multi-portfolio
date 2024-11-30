import { Injectable, TransferState, makeStateKey } from '@angular/core';
import { ComponentConfigObject, defaultConfig } from './types';
import { ComponentConfigs } from '../../projects/gerry/src/app/types,interfaces/ComponentConfigs';

const COMPONENTS_CONFIGURATION = makeStateKey<ComponentConfigObject>('COMPONENTS_CONFIGURATION');

@Injectable()
export class MpTransferState {
  constructor(private transfer: TransferState) {}

  getAppComponentsConfig() {
    return this.transfer.get(COMPONENTS_CONFIGURATION, defaultConfig);
  }

  getSingleComponentConfig<Config extends ComponentConfigs>(compoId: string) {
    return { ...this.getAppComponentsConfig().components[compoId] } as Config;
  }

  setAppComponentsConfig(value: ComponentConfigObject) {
    this.transfer.set(COMPONENTS_CONFIGURATION, value);
  }
}
