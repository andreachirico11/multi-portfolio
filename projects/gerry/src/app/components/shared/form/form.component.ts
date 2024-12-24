import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigDirective } from '../../../application-config/config.directives';
import { FormControlComponent } from './form-control/form-control.component';
import { FormConfig } from './form.config';
import { FormService } from './form.service';
import { ActionType } from '../../../../../../../src/app/types';

@Component({
  selector: 'mp-form',
  standalone: true,
  imports: [FormControlComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  hostDirectives: [ConfigDirective],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  private configDirective = inject(ConfigDirective);

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  config!: FormConfig;

  @Output() onFormAction = new EventEmitter<{formValue: Object, action:ActionType}>()

  constructor(protected formService: FormService) {}

  ngOnInit() {
    this.config = this.configDirective.getConfig<FormConfig>();
    if (!!this.config) this.formService.initForm(this.config);
  }

  onAction(action: ActionType) {
    this.onFormAction.emit({
      action,
      formValue: this.formService.formGroup.getRawValue()
    })
  }
}
