import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParagraphListComponentConfig } from './paragraph-list.config';
import { ParagraphComponent } from '../../shared/paragraph/paragraph.component';
import { ComponentRouteData } from '../../../types,interfaces/ComponentIdentity';

@Component({
  selector: 'mp-paragraph-list',
  standalone: true,
  imports: [ParagraphComponent],
  templateUrl: './paragraph-list.component.html',
  styleUrl: './paragraph-list.component.scss',
})
export class ParagraphListComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  config!: ParagraphListComponentConfig;

  @HostBinding('class') get classes() {
    return this.config.flexAlignment || '';
  }

  ngOnInit() {
    this.config = (
      this.route.snapshot.data as ComponentRouteData<ParagraphListComponentConfig>
    ).config;
  }
}
