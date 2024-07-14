import { Directive, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentConfigs } from './ComponentConfigs';
import { ComponentRouteData } from '../types,interfaces/ComponentIdentity';

@Directive({
  selector: '[mpConfig]',
  standalone: true,
})
export class ConfigDirective {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  getConfig<ComponentConfig extends ComponentConfigs>(): ComponentConfig {
    return (this.route.snapshot.data as ComponentRouteData<ComponentConfig>).config;
  }
}
