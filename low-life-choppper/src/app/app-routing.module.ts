import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PodcastComponent } from './podcast/podcast.component';

// Paths

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
