import { Directive, ElementRef, OnInit } from '@angular/core';
import { MpBaseDirectiveS } from './mpBase.directive';
import { HostDiretiveType } from '../types,interfaces/HostDirectives';

export type ScrollIntoViewDirectiveType = 'SCROLL_INTO_VIEW';

@Directive({
  selector: '[mpScrollIntoView]',
  standalone: true,
})
export class ScrollIntoViewDirective extends MpBaseDirectiveS implements OnInit {
  protected override _type: HostDiretiveType = 'SCROLL_INTO_VIEW';
  constructor(private el: ElementRef) {
    super();
  }
  ngOnInit() {
    if (this.isActivated && this.isOnClient && this.el) {
      setTimeout(() => {
        this.el.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 300);
    }
  }
}
