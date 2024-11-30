import { Component, inject } from '@angular/core';
import { Component404Config } from './404.config';
import { ConfigDirective } from '../../../application-config/config.directives';

@Component({
  selector: 'mp-err-404',
  standalone: true,
  template: `
    <div>
      <h1>{{ config.title }}</h1>
      @if (config.message) {
      <p>{{ config.message || 'Page Not Found' }}</p>
      }
    </div>
  `,
  hostDirectives: [ConfigDirective],
  styles: `
      :host {
          font-family:  monospace;
          display: flex;
          justify-content: center;
          height: 100vh;
          margin: 0;

          div {
            margin-top: 10vh
          }
          h1 {
            font-size: 48px;
            margin-bottom: 10px;
          }
          p {
            font-size: 18px;
          }
      }
  `,
})
export class Error404Component {
  private configDirective = inject(ConfigDirective);
  config = this.configDirective.getConfig<Component404Config>();
}
