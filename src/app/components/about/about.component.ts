import { Component, Input, OnInit, inject } from '@angular/core';
import { AboutParagraphComponent } from './about-paragraph/about-paragraph.component';
import { AboutComponentConfig } from './about.config';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ComponentRouteData } from '../../types,interfaces/ComponentIdentity';

@Component({
  selector: 'mp-about',
  standalone: true,
  imports: [AboutParagraphComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  config!: AboutComponentConfig

  ngOnInit() {
    this.config = (this.route.snapshot.data as ComponentRouteData<AboutComponentConfig>).config;
  }
}
