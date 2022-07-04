import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/anime.interface';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() subtitle: string = 'No results were found';
  selection = 'get' + this.titulo;
  @Input() hasData: any;
  @Input() snapSearch: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    // Espera um evento por Observable, para atualizar os dados da form
    route.params.subscribe((val) => {
      // 2ª abordagem para receber os dados do sidenav, colocada dentro do constructor
      let returnData = this.router.getCurrentNavigation()?.extras.state;
      this.hasData = returnData?.['data'];
      this.titulo = returnData?.['title'];
      if (this.hasData == undefined) {
        this.snapSearch = this.route.snapshot.params['value'];
        this.titulo = `Showing results for ${this.snapSearch}`;
        this.apiService
          .getAnimeByTitle(this.snapSearch)
          .subscribe((res) => (this.hasData = res.data));
      }
    });
  }

  ngOnInit(): void {
    //1ª abordagem para receber os dados do sidenav
    // this.hasData = this.dataService.getAnime()
  }
  goToDetalhesByService(anime: Anime) {
    this.dataService.setAnime(anime);
    this.router.navigateByUrl('/details/edit/' + anime.id);
  }

  load(): void {
    //Session storage salva os dados como string
    (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) &&
      location.reload();
    sessionStorage['refresh'] = false;
  }
}
