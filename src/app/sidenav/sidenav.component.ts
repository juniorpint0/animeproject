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
    this.router.navigate(['/']);
  }

  searchAnime(value: any) {
    this.router.navigateByUrl('/anime/' + value);
  }

  getAnimeType(value: string) {
    this.router.navigateByUrl('/animetype/' + value);
  }

  getInformation() {
    this.checked = !this.checked;
    this.className = this.checked ? 'darkMode' : '';
  }
}
