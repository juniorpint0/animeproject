import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  attributes: any;
  idAnime: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.queryAnime()
  }
  queryAnime(): void{
    this.idAnime = this.route.snapshot.params['id'];
    this.apiService.getAnimeById(this.idAnime).subscribe((res) => {
      this.attributes = res.data.attributes;
    });
  }
}
