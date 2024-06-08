import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarConfig } from './navbar.config';

@Component({
  selector: 'mp-nav',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input({ required: true }) navbarConfig!: NavbarConfig;

  @HostBinding('class') get wrapperClass() {
    return this.navbarConfig.wrapperClass || '';
  }
}
