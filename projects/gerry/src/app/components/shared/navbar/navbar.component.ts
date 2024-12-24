import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, Inject, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ConfigDirective } from '../../../application-config/config.directives';
import { NavbarConfig } from './navbar.config';
import { NavigationAction } from '../../../../../../../src/app/types';

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
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.navbarConfig = this.configDirective.getConfig<NavbarConfig>();
  }

  anchorPressed({ navType, url, targetBlank }: NavigationAction) {
    if (navType === 'window') {
      window.open(url, targetBlank ? '_blank' : '_self');
    } else {
      this.router.navigate(['./' + url], { relativeTo: this.route });
    }
  }
}
