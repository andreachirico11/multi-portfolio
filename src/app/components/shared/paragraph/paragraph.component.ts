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

  @HostBinding('class') get _() {
    return !!this.config.icon ? 'with-icon-' + this.config.icon.position : '';
  }

  @HostListener('click') navigateToExternalPage() {
    if (!!!this.config.navigateOnClick) return
    const {url, navType} = this.config.navigateOnClick;
    if (navType === 'window') {
      window.open(url, '_blank');
    }

  }
}
