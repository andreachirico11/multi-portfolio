import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigDirective } from '../../../application-config/config.directive';
import { NavbarConfig } from './navbar.config';

@Component({
  selector: 'mp-nav',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  hostDirectives: [ConfigDirective],
})
export class NavbarComponent {
  private configDirective = inject(ConfigDirective);
  @Input() navbarConfig!: NavbarConfig;

  @HostBinding('class') get wrapperClass() {
    return this.navbarConfig.wrapperClass || '';
  }

  ngOnInit() {
    if (!!!this.navbarConfig) {
      this.navbarConfig = this.configDirective.getConfig<NavbarConfig>();
    }
  }
}
