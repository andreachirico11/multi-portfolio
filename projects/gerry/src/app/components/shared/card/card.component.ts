import { NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, Input, inject } from '@angular/core';
import { ConfigDirective } from '../../../application-config/config.directives';
import { CardConfig } from './card.config';

@Component({
  selector: 'mp-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  hostDirectives: [ConfigDirective],
})
export class CardComponent {
  private configDirective = inject(ConfigDirective);

  @Input() cardConfig!: CardConfig;

  ngOnInit() {
    if (!!!this.cardConfig) {
      this.cardConfig = this.configDirective.getConfig<CardConfig>();
    }
  }

  @HostBinding('class') get classes() {
    return (this.cardConfig.cardSlideshow
      ? 'slideshow ' + this.cardConfig.cardSlideshow.position
      : this.cardConfig.leftImg
      ? 'left-icon'
      : '') +
     ( !!this.cardConfig.imgNavigation
      ? ' img-navigation'
      : '');
  }

  onImageClick() {
    if (!this.cardConfig.imgNavigation) {
      return;
    } else if (this.cardConfig.imgNavigation.navType === 'window') {
      window.open(this.cardConfig.imgNavigation.url, '_blank');
    }
  }
}
