import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigDirective } from '../../../application-config/config.directive';
import { FormControlComponent } from './form-control/form-control.component';
import { FormConfig } from './form.config';

@Component({
  selector: 'mp-form',
  standalone: true,
  imports: [FormControlComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  hostDirectives: [ConfigDirective],
})
export class FormComponent implements OnInit {
  private configDirective = inject(ConfigDirective);

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  config!: FormConfig;

  ngOnInit() {
    this.config = this.configDirective.getConfig<FormConfig>();
  }
}
