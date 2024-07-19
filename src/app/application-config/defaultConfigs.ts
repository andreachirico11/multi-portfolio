import {
  AppConfiguration,
  ComponentConfigObject,
  MpRouteConfiguration,
} from '../types,interfaces/AppConfiguration';

export const DEFAULT_404: MpRouteConfiguration = {
  componentId: '404_component',
  componentType: '404',
  lazy: false,
  title: 'error',
  path: '**',
};

export const DEFAULT_APP_CONFIG: AppConfiguration = {
  appId: 'default',
  rootComponentConfig: {},
  routes: [
    {
      ...DEFAULT_404,
    },
  ],
};

export const DEFAULT_COMPONENTS_CONFIG: ComponentConfigObject = {
  '404_component': {
    title: "Something went wrong........",
    message: 'The page cannot load properly',
  },
};
