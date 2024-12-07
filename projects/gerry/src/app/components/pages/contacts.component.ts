import { Component } from '@angular/core';
import { ScrollIntoViewDirective } from '../../directives/scrollIntoView.directive';
import { FormComponent } from '../shared/form/form.component';

@Component({
  selector: 'mp-card-slideshow',
  standalone: true,
  imports: [FormComponent],
  template: `<mp-form/>`,
  hostDirectives: [ScrollIntoViewDirective],
})
export class ContactsPage {}
