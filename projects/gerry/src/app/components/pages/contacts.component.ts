import { Component } from '@angular/core';
import { ScrollIntoViewDirective } from '../../directives/scrollIntoView.directive';
import { FormComponent } from '../shared/form/form.component';
import { ActionType } from '../../../../../../src/app/types';

@Component({
  selector: 'mp-card-slideshow',
  standalone: true,
  imports: [FormComponent],
  template: `
    <mp-form (onFormAction)="onFormAction($event)"></mp-form>
  `,
  hostDirectives: [ScrollIntoViewDirective],
})
export class ContactsPage {
  onFormAction({ action, formValue }: { formValue: Object; action: ActionType }) {
    if (action === 'accept' && this.isContactFormobject(formValue)) {
      const { name, mailTo, message } = formValue;
      window.open(
        `mailto:${atob(mailTo)}?subject=Requested information from ${name}&body=${message}`
      );
    }
  }

  private isContactFormobject(
    value: Object
  ): value is { name: string; mailTo: string; message: string } {
    return (
      'name' in value &&
      'mailTo' in value &&
      'message' in value &&
      typeof value.name === 'string' &&
      typeof value.mailTo === 'string' &&
      typeof value.message === 'string'
    );
  }
}
