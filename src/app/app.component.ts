import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mp-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}
