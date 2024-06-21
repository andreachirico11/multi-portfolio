export interface Project {
  title: string;
  routerLink: string;
  children?: Project[];
  position: { top: number; left: number };
}
export interface ProjectNavigationConfig {
  pageTitle: string;
  projectsTree: Project[];
}

export type ProjectNavigationType = 'CUSTOM_PROJ_NAV';
