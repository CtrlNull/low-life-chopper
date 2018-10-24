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
import { HomeHeadingsComponent } from './home/home-headings/home-headings.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StillPhotoComponent } from './home/still-photo/still-photo.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCarouselComponent } from './shop/shop-carousel/shop-carousel.component';
import { HomeThumbnailComponent } from './home/home-thumbnail/home-thumbnail.component';
import { PodcastThumbnailComponent } from './podcast/podcast-thumbnail/podcast-thumbnail.component';
import { PodcastJumbotronComponent } from './podcast/podcast-jumbotron/podcast-jumbotron.component';
import { HomeJumbotronComponent } from './home/home-jumbotron/home-jumbotron.component';
import { BlogComponent } from './blog/blog.component';
import { ChatComponent } from './chat/chat.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent,
    PodcastComponent,
    HomeHeadingsComponent,
    SignInComponent,
    NotFoundComponent,
    StillPhotoComponent,
    ShopComponent,
    ShopCarouselComponent,
    HomeThumbnailComponent,
    PodcastThumbnailComponent,
    PodcastJumbotronComponent,
    HomeJumbotronComponent,
    BlogComponent,
    ChatComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
