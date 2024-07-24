import { ComponentConfigurationBase } from "../../../../types,interfaces/ComponentConfigurationBase";

export interface Project {
  value: string;
  routerLink: string;
  topRatio: number;
  leftRatio: number;
  connections: string[];
}
export interface ProjectNavigationConfig extends ComponentConfigurationBase {
  labelPadding?: number;
  backgroundRect?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  projects: {
    [projectName: string]: Project;
  };
}

export type ProjectNavigationType = 'CUSTOM_PROJ_NAV';
