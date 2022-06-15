import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { AnimesComponent } from './views/animes/animes.component';
import { CustomGridComponent } from './shared/custom-grid/custom-grid.component';
import { AnimeTypeComponent } from './views/animes/anime-type/anime-type.component';
import { LoginComponent } from './views/login/login.component';

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
    path: 'details/edit/:id',
    component: DetailsComponent,
  },
  {
    path: 'anime/:value',
    component: CustomGridComponent,
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
