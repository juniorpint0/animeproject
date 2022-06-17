import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/anime.interface';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() list: any;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}

  goToDetalhesByService(anime: Anime) {
    this.dataService.setAnime(anime);
    this.router.navigateByUrl('/details/edit/' + anime.id);
  }
}
