import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { ParagraphConfig } from './paragraph.config';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'mp-paragraph',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  @Input({ required: true }) config!: ParagraphConfig;
  private isHovering = false;

  @HostBinding('class') get _() {
    return (
      (!!this.config.icon ? 'with-icon-' + this.config.icon.position : '') +
      (this.isHovering ? ' hover' : '')
    );
  }

  @HostListener('click') navigateToExternalPage() {
    if (!!!this.config.navigateOnClick) return;
    const { url, navType } = this.config.navigateOnClick;
    if (navType === 'window') {
      window.open(url, '_blank');
    }
  }

  @HostListener('mouseenter') mouseenter() {
    if (this.config.hoverClass) {
      this.isHovering = true;
    }
  }

  @HostListener('mouseleave') mouseleave() {
    if (this.config.hoverClass) {
      this.isHovering = false;
    }
  }
}
