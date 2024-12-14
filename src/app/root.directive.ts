import { isPlatformBrowser } from '@angular/common';
import { Directive, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ConfigDirective } from '../../projects/gerry/src/app/application-config/config.directives';
import { RootComponentConfigObject } from './types';

@Directive({
  selector: '[rootDirective]',
  standalone: true,
})
export class RootDirective implements OnInit {
  private readonly configDirective = inject(ConfigDirective);
  private platformId = inject(PLATFORM_ID);
  private renderer = inject(Renderer2);

  get isDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  ngOnInit() {
    this.setFavicon(this.configDirective.getConfig<RootComponentConfigObject>());
  }

  setFavicon({ favicon }: RootComponentConfigObject) {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setAttribute(
         document.querySelector('link[rel="icon"]'),
        'href',
        `favicon/${this.isDark ? 'dark' : 'light'}/${favicon}.ico`
      );
    }
  }
}
