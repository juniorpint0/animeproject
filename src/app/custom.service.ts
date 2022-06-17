import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CustomService {
  dataType: any;

  constructor(private router: Router, private api: ApiService) {}

  getAnimeHighrating() {
    this.api.getHighrating().subscribe((response: any) => {
      this.dataType = response.data;
      this.router.navigateByUrl('/anime/', {
        state: { title: 'High Rating', data: this.dataType },
      });
    });
  }
  getAnimePopular() {
    this.api.getPopular().subscribe((response: any) => {
      this.dataType = response.data;
      this.router.navigateByUrl('/anime/', {
        state: { title: 'Popular now', data: this.dataType },
      });
    });
  }
}
