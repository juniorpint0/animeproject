import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/anime.interface';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
})
export class AnimesComponent implements OnInit {
  @Input() list: Anime[] = [];
  @Input() titulo = '';
  testeAnime: any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}

  goToDetalhesByService(anime: any) {
    this.dataService.setAnime(anime);
    this.testeAnime = anime;

    this.router.navigateByUrl('/details/edit/' + anime.id);
  }
  
}
