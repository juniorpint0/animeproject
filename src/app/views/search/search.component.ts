import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = 'No results were found';
  selection = 'get' + this.title;
  @Input() hasData: any;
  @Input() snapSearch: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      const returnData = this.router.getCurrentNavigation()?.extras.state;
      if (returnData == undefined) {
        this.snapSearch = this.route.snapshot.params['value'];
        this.title = `Showing results for ${this.snapSearch}`;
        this.apiService
          .getAnimeByTitle(this.snapSearch)
          .subscribe((res) => (this.hasData = res.data));
      }
    });
  }

  goToDetailsByService(anime: any) {
    this.dataService.setAnime(anime);
    this.router.navigateByUrl('/details/edit/' + anime.id);
  }
}
