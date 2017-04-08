import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { GenresComponent } from './genres';

import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'genres',  component: GenresComponent },
  { path: '**',    component: NoContentComponent },
];
