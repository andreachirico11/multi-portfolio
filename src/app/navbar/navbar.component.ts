import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mp-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
