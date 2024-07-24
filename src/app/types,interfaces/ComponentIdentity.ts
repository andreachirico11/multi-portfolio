import { Data } from '@angular/router';
import { ComponentTypes } from '../application-config/ComponentTypes';
import { ComponentConfigs } from '../application-config/ComponentConfigs';
import { CustomComponentsConfig } from '../components/custom/custom.config';
import { ComponentConfigurationBase } from './ComponentConfigurationBase';

export interface ComponentIdentity {
  componentId: string;
  componentType: ComponentTypes;
  pathParameters?: string[];
}

export interface ComponentRouteData<
  ComponentConfig extends ComponentConfigs | CustomComponentsConfig
> extends ComponentIdentity {
  config: ComponentConfig;
}

export function isComponentIdentity(data: Data): data is ComponentIdentity {
  return !!data['componentId'];
}


export function isComponentRouteData(data: Data): data is ComponentRouteData<ComponentConfigurationBase> {
  return !!data['config'] && isComponentIdentity(data);
}
