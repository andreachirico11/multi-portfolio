export interface NavbarConfig {
  backgroundImage?: string;
  hasFooter?: boolean;
  wrapperClass?: string;
  anchors: {
    label: string;
    routerLink?: string;
  }[];
}
