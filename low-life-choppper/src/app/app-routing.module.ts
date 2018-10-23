import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

// Paths

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'error', component: NotFoundComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  
]
