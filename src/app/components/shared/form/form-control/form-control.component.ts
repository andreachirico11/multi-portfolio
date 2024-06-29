import { Component, Input } from '@angular/core';
import { FormControlConfig } from './form-control.config';

@Component({
  selector: 'mp-form-control',
  standalone: true,
  imports: [],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
  @Input() config!: FormControlConfig
}
