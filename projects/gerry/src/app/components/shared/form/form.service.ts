import { Injectable } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { FormControlConfig } from './form-control/form-control.config';
import { FormConfig } from './form.config';

@Injectable()
export class FormService {
  private _formgroup: FormGroup = new FormGroup({});

  private _initialized = false;
  get initialized() {
    return this._initialized;
  }
  get formGroup() {
    return this._formgroup;
  }

  initForm(c: FormConfig) {
    this._formgroup = new FormGroup(
      c.controls.reduce(
        (formGroupObject, controlConfig) => ({
          ...formGroupObject,
          [controlConfig.name]: this.getFormControl(controlConfig),
        }),
        {}
      )
    );
    this._initialized = true;
  }

  private getFormControl({ required, type, value = null }: FormControlConfig) {
    // TODO: to be improved
    return new UntypedFormControl(value, [
      ...(required ? [Validators.required] : []),
      ...(type !== 'email' ? [] : [Validators.email]),
    ]);
  }
}
