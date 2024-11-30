// import { Data } from '@angular/router';
// import { ComponentConfigs } from './ComponentConfigs';
// import { CustomComponentsConfig } from '../components/custom/custom.config';
// import { ComponentConfigurationBase } from './ComponentConfigurationBase';

// export interface ComponentIdentity {
//   componentId: string;
//   pathParameters?: string[];
// }

// export interface ComponentRouteData<
//   ComponentConfig extends ComponentConfigurationBase
// > extends ComponentIdentity {
//   config: ComponentConfig;
//   childrenConfigs?: ComponentConfigs[]

// }

// export function isComponentIdentity(data: Data): data is ComponentIdentity {
//   return !!data['componentId'];
// }

// export function isComponentRouteData(
//   data: Data
// ): data is ComponentRouteData<ComponentConfigurationBase> {
//   return !!data['config'] && isComponentIdentity(data);
// }
