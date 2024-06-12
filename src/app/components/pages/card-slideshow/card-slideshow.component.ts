import { Component, HostBinding, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardSlideshowConfig } from './card-slideshow.config';
import { CardComponent } from '../../shared/card/card.component';
import { ComponentRouteData } from '../../../types,interfaces/ComponentIdentity';

@Component({
  selector: 'mp-card-slideshow',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-slideshow.component.html',
  styleUrl: './card-slideshow.component.scss',
})
export class CardSlideshowComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  config!: CardSlideshowConfig;

  @HostBinding('class') get classes() {
    return this.config.vertical ? 'vertical' : '';
  }

  ngOnInit() {
    this.config = (this.route.snapshot.data as ComponentRouteData<CardSlideshowConfig>).config;
  }
}
