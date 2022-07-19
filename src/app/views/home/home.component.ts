import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popular: any;
  highrating: any;
  upcoming: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPopular().subscribe((response: any) => {
      this.popular = response.data;
    });
    this.apiService.getHighrating().subscribe((response: any) => {
      this.highrating = response.data;
    });
    this.apiService.getUpcoming().subscribe((response: any) => {
      this.upcoming = response.data;
    });
  }
}
