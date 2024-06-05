import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarConfig } from './navbar/navbarConfig';

@Component({
  selector: 'mp-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navbarConfig: NavbarConfig = {
    backgroundImage: 'assets/nav.png',
    hasFooter: true,
    anchors: [
      { label: 'about', routerLink: '/about' },
      { label: 'mail', routerLink: '/contact' },
      { label: 'bandcamp' },
      { label: 'spotify' },
      { label: 'vimeo', routerLink: '/vimeo' },
    ],
  };

  navbar2Config: NavbarConfig = {
    backgroundImage: 'assets/nav.png',
    wrapperClass: 'full-screen',
    anchors: [
      { label: 'project', routerLink: '/project' },
      { label: 'releases', routerLink: '/releases' },
      { label: 'live', routerLink: '/live' },
      { label: 'papers', routerLink: '/papers' },
      { label: 'lessons', routerLink: '/lessons' },
    ],
  };
}
