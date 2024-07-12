import { CustomComponentsType } from '../components/custom/custom.config';
import { ProjectNavigationComponent } from '../components/custom/jerry/project-navigation/project-navigation.component';
import { ComponentTypes } from './ComponentTypes';

export function getImportFunction(type: CustomComponentsType) {
  switch (type) {
    case 'CUSTOM_PROJ_NAV':
    default:
      return () =>
        import('../components/custom/jerry/project-navigation/project-navigation.component').then(
          ({ ProjectNavigationComponent }) => ProjectNavigationComponent
        );
  }
}

export function getComponentClass(type: CustomComponentsType) {
  switch (type) {
    // Todo CREARE DEFAULT
    case 'CUSTOM_PROJ_NAV':
    default:
      return ProjectNavigationComponent;
  }
}
export function isCustomConfig(c: CustomComponentsType | ComponentTypes): c is CustomComponentsType {
  const CustomComponentsTypeValsObject: { [key in CustomComponentsType]: true } = {
    CUSTOM_PROJ_NAV: true,
  };
  return CustomComponentsTypeValsObject.hasOwnProperty(c);
}
