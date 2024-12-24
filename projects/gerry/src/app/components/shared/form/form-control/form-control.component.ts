import { Component, Input } from '@angular/core';
import { FormControlConfig } from './form-control.config';
import { FormControlName, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'mp-form-control',
  standalone: true,
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
  imports: [ReactiveFormsModule]
})
export class FormControlComponent {
  @Input() config!: FormControlConfig;

    constructor(protected formService: FormService) {}

}
