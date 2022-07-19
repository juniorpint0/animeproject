import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from './anime.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://kitsu.io/api/edge';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.url + '/anime?page[limit]=10');
  }

  getPopular() {
    return this.http.get<any>(
      `${this.url}/anime/?sort=popularityRank&page[limit]=6`
    );
  }

  getHighrating() {
    return this.http.get<any>(
      `${this.url}/anime?page[limit]=6&page[offset]=6&sort=-averageRating`
    );
  }
  getUpcoming() {
    return this.http.get<any>(
      `${this.url}/anime?sort=-startDate&page&page[limit]=6`
    );
  }
  getAnimeById(id: any) {
    return this.http.get<any>(`${this.url}/anime/${id}`);
  }
  getAnimeByTitle(text: any) {
    return this.http.get<any>(
      `${this.url}/anime/?filter[text]=${text}&page[limit]=20`
    );
  }
  getAnimesByGenre(text: any) {
    return this.http.get<any>(
      `${this.url}/anime/?filter[categories]=${text}&page[limit]=20`
    );
  }
}
