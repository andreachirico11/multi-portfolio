
export interface FormControlConfig {
  type: "text" | "email" | "textarea",
  name: string;
  label: string;
  required?: boolean;
  hidden?: boolean;
  value?: any
}


export type FormControlype = 'FORM-CONTROL';
