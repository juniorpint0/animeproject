import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { AnimesComponent } from './views/animes/animes.component';
import { AnimeTypeComponent } from './views/anime-type/anime-type.component';
import { LoginComponent } from './views/login/login.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'animes',
    component: AnimesComponent,
  },
  {
    path: 'anime/:value',
    component: SearchComponent,
  },
  {
    path: 'details/edit/:id',
    component: DetailsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'animetype/:value',
    component: AnimeTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
