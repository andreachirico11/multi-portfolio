import { Component, Input, OnInit } from '@angular/core';
import { CardConfig } from './card.config';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'mp-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardConfig: CardConfig = { content: '' };
}
