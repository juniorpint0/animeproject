import { Injectable } from '@angular/core';
import { Anime } from 'src/app/anime.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private anime: Anime | undefined;
  private title: string = '';

  constructor() {}

  setAnime(anime: Anime) {
    this.anime = anime;
  }
  getAnime() {
    return this.anime;
  }
}
