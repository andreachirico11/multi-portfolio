import { FormControlConfig } from "./form-control/form-control.config";

export interface FormConfig {
  controls: FormControlConfig[];
  actionButtons: {label: string}[];
}


export type FormType = 'FORM';
