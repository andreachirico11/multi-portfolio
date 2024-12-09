import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[mpScrollIntoView]',
  standalone: true,
})
export class ScrollIntoViewDirective implements OnInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.el) {
      setTimeout(() => {
        this.el.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 300);
    }
  }
}
