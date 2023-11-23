import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { PostHeaderComponent } from './post/post-header/post-header.component';
import { PostInfoComponent } from './post/post-info/post-info.component';
import { PostStatisticsComponent } from './post/post-statistics/post-statistics.component';
import { ArtistContainerComponent } from './artist-container/artist-container.component';
import { PhotoCardComponent } from './artist-container/photo-card/photo-card.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ShopComponent } from './shop/shop.component';

import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountPipe } from './count.pipe';
import { PricePipe } from './price.pipe';
import { RatingDirective } from './rating.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardComponent,
    PostComponent,
    PostHeaderComponent,
    PostInfoComponent,
    PostStatisticsComponent,
    ArtistContainerComponent,
    PhotoCardComponent,
    LoginComponent,
    UserRegistrationComponent,
    ShopComponent,
    CountPipe,
    PricePipe,
    RatingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
