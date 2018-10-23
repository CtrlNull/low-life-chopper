import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PodcastComponent } from './podcast/podcast.component';
import { RouterModule } from '@angular/router';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeHeadingsComponent } from './home/home-headings/home-headings.component';
import { HomeFeaturetteComponent } from './home/home-featurette/home-featurette.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent,
    PodcastComponent,
    HomeCarouselComponent,
    HomeHeadingsComponent,
    HomeFeaturetteComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
