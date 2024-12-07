import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, Inject, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigDirective } from '../../../application-config/config.directives';
import { NavbarConfig } from './navbar.config';

@Component({
  selector: 'mp-nav',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  hostDirectives: [{ directive: ConfigDirective, inputs: ['childrenIdIndex'] }],
})
export class NavbarComponent implements OnInit {
  navbarConfig!: NavbarConfig;
  @HostBinding('class') get wrapperClass() {
    return this.navbarConfig.wrapperClass || '';
  }
  private readonly configDirective = inject(ConfigDirective);
  ngOnInit() {
    this.navbarConfig = this.configDirective.getConfig<NavbarConfig>();
  }
}
