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
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPopular().subscribe((response: any) => {
      this.popular = response.data;
    });
    this.api.getHighrating().subscribe((response: any) => {
      this.highrating = response.data;
    });
    this.api.getUpcoming().subscribe((response: any) => {
      this.upcoming = response.data;
    });
  }
}
