import { Component, Input } from '@angular/core';
import { AboutParagraphConfig } from './about.paragraph.config';

@Component({
  selector: 'mp-about-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './about-paragraph.component.html',
  styleUrl: './about-paragraph.component.scss',
})
export class AboutParagraphComponent {
  @Input({ required: true }) config!: AboutParagraphConfig;
}
