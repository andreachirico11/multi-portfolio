import { Component, HostBinding, inject } from '@angular/core';
import { ConfigDirective } from '../../../application-config/config.directive';
import { CardComponent } from '../../shared/card/card.component';
import { CardSlideshowConfig } from './card-slideshow.config';

@Component({
  selector: 'mp-card-slideshow',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-slideshow.component.html',
  styleUrl: './card-slideshow.component.scss',
  hostDirectives: [ConfigDirective],
})
export class CardSlideshowComponent {
  private configDirective = inject(ConfigDirective);
  config!: CardSlideshowConfig;

  @HostBinding('class') get classes() {
    return this.config.vertical ? 'vertical' : '';
  }

  ngOnInit() {
    this.config = this.configDirective.getConfig<CardSlideshowConfig>();
  }
}
