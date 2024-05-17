import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'about',
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(({ AboutComponent }) => AboutComponent),
  },
  {
    title: 'contact',
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then(({ ContactComponent }) => ContactComponent),
  },
  {
    title: 'vimeo',
    path: 'vimeo',
    loadComponent: () =>
      import('./vimeo/vimeo.component').then(({ VimeoComponent }) => VimeoComponent),
  },
];
