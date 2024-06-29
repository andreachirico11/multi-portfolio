import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarConfig } from './navbar.config';
import { ComponentRouteData } from '../../../types,interfaces/ComponentIdentity';

@Component({
  selector: 'mp-nav',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  @Input() navbarConfig!: NavbarConfig;

  @HostBinding('class') get wrapperClass() {
    return this.navbarConfig.wrapperClass || '';
  }

  ngOnInit() {
    if (!!!this.navbarConfig) {
      this.navbarConfig = (this.route.snapshot.data as ComponentRouteData<NavbarConfig>).config;
      console.log(this.navbarConfig);

    }
  }
}
