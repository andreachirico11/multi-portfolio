import { NgComponentOutlet } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { NavbarConfig } from '../navbar/navbar.config';
import { NavbarComponent } from '../navbar/navbar.component';
import { MpTransferState } from '../../../services/mpTransferState.service';

@Component({
  selector: '<mp-component-outlet-wrapper>',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <ng-container *ngComponentOutlet="navbarComponent; inputs: navbarConfig"></ng-container>
  `,
})
export class ComponentOutletWrapperComponent implements OnInit {
  navbarComponent = NavbarComponent;
  private tState = inject(MpTransferState);

  @Input({ required: true }) componentId!: string;

  navbarConfig!: Record<'navbarConfig', NavbarConfig>;

  ngOnInit() {
    this.navbarConfig = {
      navbarConfig: this.tState.getSingleComponentConfig<NavbarConfig>(this.componentId),
    };
  }
}
