import { Component } from '@angular/core';
import { ScrollIntoViewDirective } from '../../directives/scrollIntoView.directive';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'mp-card-slideshow',
  standalone: true,
  imports: [NavbarComponent],
  template: `<mp-nav/>`,
  hostDirectives: [ScrollIntoViewDirective],
})
export class LivesComponent {}
