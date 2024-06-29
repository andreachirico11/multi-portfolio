export interface NavbarConfig {
  backgroundImage?: string;
  hasFooter?: boolean;
  wrapperClass?: string;
  title?: string;
  anchors: {
    label: string;
    routerLink?: string;
  }[];
}

export type NavbarType = "NAVBAR";
