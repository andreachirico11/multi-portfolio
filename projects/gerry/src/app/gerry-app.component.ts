import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootDirective } from '../../../../src/app/root.directive';
import { ConfigDirective } from './application-config/config.directives';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'gerry-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgOptimizedImage],
  template: `
    <div class="img-container">
      <img [ngSrc]="'https://drive.google.com/thumbnail?id=1ruht-LGQ9qPlTLcn2G27BaT5HF4vMnIu&sz=w1500'" fill />
      <div class="navbar-container">
        <mp-nav [childrenIdIndex]="0" class="nav-1"></mp-nav>
        <h3 class="text-primary footer">scroll down</h3>
        <div class="rotation-container">
          <mp-nav [childrenIdIndex]="1"></mp-nav>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  hostDirectives: [ConfigDirective, RootDirective],
  styleUrl: './gerry-app.component.scss',
})
export class GerryAppComponent implements OnInit {


  ngOnInit() {
  }
}
