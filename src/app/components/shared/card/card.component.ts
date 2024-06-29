import { Component, HostBinding, Input, OnInit, inject } from '@angular/core';
import { CardConfig } from './card.config';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComponentRouteData } from '../../../types,interfaces/ComponentIdentity';

@Component({
  selector: 'mp-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  @Input() cardConfig!: CardConfig;

  ngOnInit() {
    if (!!!this.cardConfig) {
      this.cardConfig = (this.route.snapshot.data as ComponentRouteData<CardConfig>).config;
    }
  }

  @HostBinding('class') get classes() {
    return this.cardConfig.cardSlideshow
      ? 'slideshow ' + this.cardConfig.cardSlideshow.position
      : '';
  }
}
