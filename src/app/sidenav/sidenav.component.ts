import { Component, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() checked = false;
  @Input() titulo = '';
  @Output() dataType: any;
  select = 'get' + this.titulo;
  @Input() search: any;
  @HostBinding('class') className = '';
  toggleControl = new FormControl();
  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
     this.toggleControl.valueChanges.subscribe((val) => {
       this.className = val ? 'darkMode' : '';
     });
  }

  openSection(section: string) {
    // this.router.navigate(['/', section]);
    this.router.navigate(['/']);
  }

  searchAnime(value: any) {
    this.router.navigateByUrl('/anime/' + value);

    // this.api.getAnimeByTitle(value).subscribe((response: any) => {
    //   this.search = response.data;
    //   this.titulo = value;

      //1ª Abordagem para passar os dados para o custom componente
      // this.dataService.setAnime(this.search);
      // this.router.navigateByUrl('/custom')

      //2ª Abordagem para passar os dados para o custom componente
    //   this.router.navigateByUrl('/anime/' + value, {
    //     state: { title: `Showing results for ${value}`, data: this.search },
    //   });
    // });
  }

  getAnimeType(value: string) {
    // this.router.navigateByUrl('/animetype/' + value, {
    //   state: { title: 'Popular now', data: this.dataType },
    // });
    this.router.navigateByUrl('/animetype/' + value);
  }

  getInformation() {
    this.checked = !this.checked;
    this.className = this.checked ? 'darkMode' : '';
  }
}
