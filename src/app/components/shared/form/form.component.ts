import { Component, OnInit, inject } from '@angular/core';
import { FormConfig } from './form.config';
import { FormControlComponent } from './form-control/form-control.component';
import { ActivatedRoute } from '@angular/router';
import { ComponentRouteData } from '../../../types,interfaces/ComponentIdentity';

@Component({
  selector: 'mp-form',
  standalone: true,
  imports: [FormControlComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  config!: FormConfig;

  ngOnInit() {
      this.config = (this.route.snapshot.data as ComponentRouteData<FormConfig>).config;

  }
}
