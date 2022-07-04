import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './views/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnimesComponent } from './views/animes/animes.component';
import { DetailsComponent } from './views/details/details.component';


import { AnimeTypeComponent } from './views/anime-type/anime-type.component';
import { BannerComponent } from './banner/banner.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { LoginComponent } from './views/login/login.component';
import { SearchComponent } from './views/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    AnimesComponent,
    DetailsComponent,
    AnimeTypeComponent,
    BannerComponent,
    LoginComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
