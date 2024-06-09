import { Component, HostBinding, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentRouteData } from '../../types,interfaces/ComponentIdentity';
import { AboutComponentConfig } from '../about/about.config';
import { CardComponent } from '../card/card.component';
import { CardSlideshowConfig } from './card-slideshow.config';

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
