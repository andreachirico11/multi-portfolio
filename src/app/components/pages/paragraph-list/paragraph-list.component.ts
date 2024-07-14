import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { ConfigDirective } from '../../../application-config/config.directive';
import { ParagraphComponent } from '../../shared/paragraph/paragraph.component';
import { ParagraphListComponentConfig } from './paragraph-list.config';

@Component({
  selector: 'mp-paragraph-list',
  standalone: true,
  imports: [ParagraphComponent],
  templateUrl: './paragraph-list.component.html',
  styleUrl: './paragraph-list.component.scss',
  hostDirectives: [ConfigDirective],
})
export class ParagraphListComponent implements OnInit {
  private configDirective = inject(ConfigDirective);

  config!: ParagraphListComponentConfig;

  @HostBinding('class') get classes() {
    return this.config.flexAlignment || '';
  }

  ngOnInit() {
    this.config = this.configDirective.getConfig<ParagraphListComponentConfig>();
  }
}
