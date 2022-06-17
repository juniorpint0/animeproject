import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/anime.interface';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-anime-type',
  templateUrl: './anime-type.component.html',
  styleUrls: ['./anime-type.component.scss'],
})
export class AnimeTypeComponent implements OnInit {
  snapSearch: any;
  @Input() title: any;
  @Input() hasData: any;
  type: any;
  dataType: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private dataService: DataService
  ) {
    route.params.subscribe((val) => {
      this.snapSearch = this.route.snapshot.params['value'];
      console.log(val);
      if (this.snapSearch == 'popular') {
        this.api.getPopular().subscribe((response: any) => {
          this.hasData = response.data;
          this.title = 'Popular now';
        });
      } else if (this.snapSearch == 'highrating') {
        this.api.getHighrating().subscribe((response: any) => {
          this.hasData = response.data;
          this.title = 'High Rating';
        });
      } else if (this.snapSearch == 'upcoming') {
        this.api.getUpcoming().subscribe((response: any) => {
          this.hasData = response.data;
          this.title = 'Up Coming';
        });
      }
    });
  }

  ngOnInit(): void {
    console.log('Entrei');
  }

  goToDetalhesByService(anime: Anime) {
    this.dataService.setAnime(anime);
    this.router.navigateByUrl('/details/edit/' + anime.id);
  }
}
