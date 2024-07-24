import { ComponentConfigurationBase } from "../../../types,interfaces/ComponentConfigurationBase";
import { FormControlConfig } from "./form-control/form-control.config";

export interface FormConfig extends ComponentConfigurationBase {
  controls: FormControlConfig[];
  actionButtons: {label: string}[];
}


export type FormType = 'FORM';
