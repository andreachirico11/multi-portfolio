import { Directive, ElementRef, OnInit } from '@angular/core';

export type ScrollIntoViewDirectiveType = 'SCROLL_INTO_VIEW';

@Directive({
  selector: '[mpScrollIntoView]',
  standalone: true,
})
export class ScrollIntoViewDirective implements OnInit {
  constructor(private el: ElementRef) {
  }
  ngOnInit() {
  //   if (this.isActivated && this.isOnClient && this.el) {
  //     setTimeout(() => {
  //       this.el.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  //     }, 300);
  //   }
  // }
}}
