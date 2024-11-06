import { Injectable, TransferState, makeStateKey } from '@angular/core';
import { ComponentConfigObject } from '../types,interfaces/AppConfiguration';
import { ComponentConfigs } from '../application-config/ComponentConfigs';

const COMPONENTS_CONFIGURATION = makeStateKey<ComponentConfigObject>('COMPONENTS_CONFIGURATION');

@Injectable()
export class MpTransferState {
  constructor(private transfer: TransferState) {}

  getAppComponentsConfig() {
    return this.transfer.get(COMPONENTS_CONFIGURATION, null);
  }

  getSingleComponentConfig<Config extends ComponentConfigs>(compoId: string) {
    const totalConfig = this.getAppComponentsConfig();
    if (!!totalConfig && isKeyOfObject(compoId, totalConfig)) {
      return totalConfig[compoId] as Config;
    }
    throw new Error('Missing component config');
  }

  setAppComponentsConfig(value: ComponentConfigObject) {
    this.transfer.set(COMPONENTS_CONFIGURATION, value);
  }
}

function isKeyOfObject(key: string, c: ComponentConfigs): key is keyof ComponentConfigs {
  return Object.prototype.hasOwnProperty.call(c, key);
}
