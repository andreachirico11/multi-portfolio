import { Directive, inject } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { CustomComponentsConfig } from '../components/custom/custom.config';
import { ScrollIntoViewDirective } from '../directives/scrollIntoView.directive';
import { ComponentRouteData, isComponentRouteData } from '../types,interfaces/ComponentIdentity';
import { ComponentConfigs } from './ComponentConfigs';

@Directive({
  selector: '[mpConfig]',
  standalone: true,
  hostDirectives: [ScrollIntoViewDirective],
})
export class ConfigDirective {
  private readonly routeData: Data = inject(ActivatedRoute).snapshot.data;

  constructor(scrollIntoViewDirective: ScrollIntoViewDirective) {
    if (isComponentRouteData(this.routeData)) {
      this.routeData.config.hostDirectives?.forEach((conf) => {
        if (conf.directiveType === scrollIntoViewDirective.directiveType)
          scrollIntoViewDirective.activate();
      });
    }
  }

  getConfig<ComponentConfig extends ComponentConfigs | CustomComponentsConfig>(): ComponentConfig {
    return (this.routeData as ComponentRouteData<ComponentConfig>).config;
  }
}
