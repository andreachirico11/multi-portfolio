import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[mpScrollIntoView]',
  standalone: true,
})
export class ScrollIntoViewDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit() {
    if (this.el) {
      setTimeout(() => {
        this.el.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 300);
    }
  }
}
