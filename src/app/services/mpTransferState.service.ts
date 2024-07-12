import { Injectable, TransferState, makeStateKey } from '@angular/core';
import { AppConfiguration } from '../types,interfaces/AppConfiguration';
import { ComponentConfigs } from '../application-config/ComponentConfigs';

const APP_CONFIGURATION = makeStateKey<AppConfiguration>('APP_CONFIGURATION');
const COMPONENTS_CONFIGURATION = makeStateKey<ComponentConfigs>('COMPONENTS_CONFIGURATION');

@Injectable()
export class MpTransferState {
  constructor(private transfer: TransferState) {}

  getAppConfiguration(defaultConfig?: AppConfiguration) {
    return this.transfer.get(
      APP_CONFIGURATION,
      defaultConfig || { appId: '', routes: [], rootComponentConfig: {  } }
    );
  }

  setAppConfiguration(value: AppConfiguration) {
    this.transfer.set(APP_CONFIGURATION, value);
  }

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

  setAppComponentsConfig(value: ComponentConfigs) {
    this.transfer.set(COMPONENTS_CONFIGURATION, value);
  }
}

function isKeyOfObject(key: string, c: ComponentConfigs): key is keyof ComponentConfigs {
  return Object.prototype.hasOwnProperty.call(c, key);
}
