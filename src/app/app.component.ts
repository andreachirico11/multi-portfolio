import { NgComponentOutlet, isPlatformServer } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { ROUTES, RouterOutlet } from '@angular/router';
import { environment } from '../environment.sample';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarConfig } from './components/shared/navbar/navbar.config';
import { MpTransferState } from './services/mpTransferState.service';

@Component({
  selector: 'mp-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly platform = inject(PLATFORM_ID);
  private tState = inject(MpTransferState);
  config = this.tState.getAppConfiguration().rootComponentConfig;

  constructor() {
    if (!this.isInProd && isPlatformServer(this.platform)) this.logConfiguration();
  }

  get isInProd() {
    return environment.production;
  }

  navbarComponent = NavbarComponent;

  navbarConfig = !!!this.config.navbar1
    ? null
    : this.tState.getSingleComponentConfig<NavbarConfig>(this.config.navbar1?.componentId);
  navbar2Config = !!!this.config.navbar2
    ? null
    : this.tState.getSingleComponentConfig<NavbarConfig>(this.config.navbar2?.componentId);

  getNavbarInputRecord(navbarConfig: NavbarConfig): Record<'navbarConfig', NavbarConfig> {
    return {
      navbarConfig,
    };
  }

  private logConfiguration() {
    console.log('CONFIGURATION');
    for (const [key, value] of Object.entries(environment))
      console.log('   ' + key + '-> ' + value);
    console.log('ROUTES');
    inject(ROUTES)
      .flat()
      .forEach(({ path }) => console.log('    ' + path));
    if (!!this.tState.getAppComponentsConfig())
      console.log('COMPONENTS CONFIGURATION LOADED CORRECTLY');
  }
}
