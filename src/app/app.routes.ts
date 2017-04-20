import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { GenresComponent } from './genres';
import { EventsComponent } from './events';
import { ListenComponent } from './listen';
import { VideosComponent } from './videos';
import { VideoDetailComponent } from './videos/video-detail';

import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'genres',  component: GenresComponent },
  { path: 'events',  component: EventsComponent },
  { path: 'listen',  component: ListenComponent },
  { path: 'videos',  component: VideosComponent },
  { path: 'video/:id', component: VideoDetailComponent },
  { path: '**',    component: NoContentComponent },
];
