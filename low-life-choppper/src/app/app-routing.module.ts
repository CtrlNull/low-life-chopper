import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';

// Paths

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  
]
