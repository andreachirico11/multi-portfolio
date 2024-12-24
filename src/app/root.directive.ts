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
    if (isPlatformBrowser(this.platformId)) {
      const {favicon, preconnections} = this.configDirective.getConfig<RootComponentConfigObject>();
      this.addPreconnectTags(preconnections)
      this.setFavicon(favicon);
    }
  }

  addPreconnectTags(preconnections: string[] = []) {
    preconnections.forEach((preconnection) => {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'preconnect');
      this.renderer.setAttribute(link, 'href', preconnection);
      this.renderer.appendChild(document.head, link);
    });

  }

  setFavicon(favicon : string) {
      this.renderer.setAttribute(
         document.querySelector('link[rel="icon"]'),
        'href',
        `favicon/${this.isDark ? 'dark' : 'light'}/${favicon}.ico`
      );
    }
}
