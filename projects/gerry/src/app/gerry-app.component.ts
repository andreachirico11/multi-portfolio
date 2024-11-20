import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarConfig } from './components/shared/navbar/navbar.config';

@Component({
  selector: 'gerry-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <mp-nav [navbarConfig]="navbar1"></mp-nav>
    <mp-nav [navbarConfig]="navbar2"></mp-nav>
    <router-outlet></router-outlet>
  `,
})
export class GerryAppComponent {
  navbar1: NavbarConfig = {
    backgroundImage: 'assets/gerry/nav.png',
    wrapperClass: 'absolute-nav',
    htmlFooter: '<h3 class="text-primary">scroll down</h3>',
    anchors: [
      {
        label: 'about',
        routerLink: '/gerry/about',
      },
      {
        label: 'mail',
        routerLink: '/gerry/contact',
      },
      {
        label: 'bandcamp',
      },
      {
        label: 'spotify',
      },
      {
        label: 'vimeo',
        routerLink: '/gerry/vimeo',
      },
    ],
  };

  navbar2: NavbarConfig = {
    backgroundImage: 'assets/gerry/nav.png',
    wrapperClass: 'absolute-nav full-screen',
    anchors: [
      {
        label: 'project',
        routerLink: '/gerry/projects',
      },
      {
        label: 'releases',
        routerLink: '/gerry/releases',
      },
      {
        label: 'live',
        routerLink: '/gerry/live',
      },
      {
        label: 'papers',
        routerLink: '/gerry/papers',
      },
      {
        label: 'lessons',
        routerLink: '/gerry/lessons',
      },
    ],
  };
}
