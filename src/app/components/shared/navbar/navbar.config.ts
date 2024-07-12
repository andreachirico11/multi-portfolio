export interface NavbarConfig {
  backgroundImage?: string;
  htmlFooter?: string;
  wrapperClass?: string;
  title?: string;
  anchors: {
    label: string;
    routerLink?: string;
  }[];
}

export type NavbarType = "NAVBAR";
