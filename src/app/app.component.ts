import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarConfig } from './components/shared/navbar/navbar.config';

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
    wrapperClass: 'absolute-nav',
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
    wrapperClass: 'absolute-nav full-screen',
    anchors: [
      { label: 'project', routerLink: '/projects' },
      { label: 'releases', routerLink: '/releases' },
      { label: 'live', routerLink: '/live' },
      { label: 'papers', routerLink: '/papers' },
      { label: 'lessons', routerLink: '/lessons' },
    ],
  };
}
