import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mp-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  // private readonly platform = inject(PLATFORM_ID);
  // private tState = inject(MpTransferState);
  // config = this.tState.getAppConfiguration().rootComponentConfig;
  // constructor() {
  //   if (!this.isInProd && isPlatformServer(this.platform)) this.logConfiguration();
  // }
  // get isInProd() {
  //   return environment.production;
  // }
  // private logConfiguration() {
  //   console.log('appcomponent*******************************************');
  //   console.log('CONFIGURATION');
  //   for (const [key, value] of Object.entries(environment))
  //     console.log('   ' + key + '-> ' + value);
  //   console.log('ROUTES');
  //   inject(ROUTES)
  //     .flat()
  //     .forEach(({ path, data }) => console.log('    ' + path + ' ' + data?.['componentId']));
  //   if (!!this.tState.getAppComponentsConfig())
  //     console.log('COMPONENTS CONFIGURATION LOADED CORRECTLY');
  //   else console.log('COMPONENTS CONFIGURATION NOT LOADED');
  //   console.log('appcomponent*******************************************');
  // }
}
