import { Routes } from '@angular/router';
import { ConfigResolver } from './application-config/config.resolver';

export const routes: Routes = [
  {
    title: 'about',
    path: 'about',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'paragraph_list_1',
    },
    loadComponent: () =>
      import('./components/pages/paragraph-list/paragraph-list.component').then(
        ({ ParagraphListComponent }) => ParagraphListComponent
      ),
  },
  {
    title: 'contact',
    path: 'contact',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'contact_1',
    },
    loadComponent: () =>
      import('./components/shared/form/form.component').then(({ FormComponent }) => FormComponent),
  },
  {
    title: 'releases',
    path: 'releases',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'card_slideshow_1',
    },
    loadComponent: () =>
      import('./components/pages/card-slideshow/card-slideshow.component').then(
        ({ CardSlideshowComponent }) => CardSlideshowComponent
      ),
  },
  {
    title: 'papers',
    path: 'papers',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'paragraph_list_2',
    },
    loadComponent: () =>
      import('./components/pages/paragraph-list/paragraph-list.component').then(
        ({ ParagraphListComponent }) => ParagraphListComponent
      ),
  },
  {
    title: 'projects',
    path: 'projects/:projectName',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'project_card',
      pathParameters: ['projectName'],
    },
    loadComponent: () =>
      import('./components/shared/card/card.component').then(({ CardComponent }) => CardComponent),
  },
  {
    title: 'projects',
    path: 'projects',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'custom_proj_nav',
    },
    loadComponent: () =>
      import('./components/custom/jerry/project-navigation/project-navigation.component').then(
        ({ ProjectNavigationComponent }) => ProjectNavigationComponent
      ),
  },

  {
    title: 'lessons',
    path: 'lessons',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'card_slideshow_2',
    },
    loadComponent: () =>
      import('./components/pages/card-slideshow/card-slideshow.component').then(
        ({ CardSlideshowComponent }) => CardSlideshowComponent
      ),
  },
  {
    title: 'live',
    path: 'live/:year',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'paragraph_list_live',
      pathParameters: ['year'],
    },
    loadComponent: () =>
      import('./components/pages/paragraph-list/paragraph-list.component').then(
        ({ ParagraphListComponent }) => ParagraphListComponent
      ),
  },
  {
    title: 'live',
    path: 'live',
    resolve: { config: ConfigResolver },
    data: {
      componentId: 'live_nav',
    },
    loadComponent: () =>
      import('./components/shared/navbar/navbar.component').then(
        ({ NavbarComponent }) => NavbarComponent
      ),
  },
  {
    title: 'gerry',
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/shared/empty/empty.component').then(
        ({ EmptyComponent }) => EmptyComponent
      ),
  },
  {
    title: 'error',
    path: '**',
    data: {
      componentId: '404_component',
    },
    resolve: { config: ConfigResolver },
    loadComponent: () =>
      import('./components/shared/404/404.component').then(
        ({ Error404Component }) => Error404Component
      ),
  },
];
