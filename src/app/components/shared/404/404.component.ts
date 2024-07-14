import { Component, inject } from "@angular/core";
import { Component404Config } from "./404.config";
import { ConfigDirective } from "../../../application-config/config.directive";


@Component({
  selector: 'mp-err-404',
  standalone: true,
  template: '<h1>404444444444444444444444444444444444444444444444</h1>',
  hostDirectives: [ConfigDirective],
})
export class Error404Component {
  private configDirective = inject(ConfigDirective);
  config = this.configDirective.getConfig<Component404Config>();

}
