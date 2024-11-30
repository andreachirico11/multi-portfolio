import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ConfigDirective } from './application-config/config.directives';

@Component({
  selector: 'gerry-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <mp-nav [childrenIdIndex]="0"></mp-nav>
    <mp-nav [childrenIdIndex]="1"></mp-nav>
    <router-outlet></router-outlet>
  `,
})
export class GerryAppComponent {}
