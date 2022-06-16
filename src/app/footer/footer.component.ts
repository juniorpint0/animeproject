import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() checked = false;
  @Output() feedbackclick = new EventEmitter();
  @Input() titulo = '';
  @Output() highrating: any;
  @Input() value = '';
  select = 'get' + this.titulo;
  @Input() search: any;
  @HostBinding('class') className = '';
  toggleControl = new FormControl();
  dataType: any;
  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {}

  openSection(section: string) {
    this.router.navigate(['/', section]);
  }

  checar(value: any) {
    this.api.getAnimeByTitle(value).subscribe((response: any) => {
      this.search = response.data;
      this.router.navigateByUrl('/custom', {
        state: { title: `Showing results for ${value}`, data: this.search },
      });
      value = '';
    });
  }
  searchanime(value: any) {
    this.api.getAnimeByTitle(value).subscribe((response: any) => {
      this.search = response.data;
      this.titulo = value;
      this.router.navigateByUrl('/anime/' + value, {
        state: { title: `Showing results for ${value}`, data: this.search },
      });
    });
  }
  getAnimeHighrating() {
    this.api.getHighrating().subscribe((response: any) => {
      this.highrating = response.data;
      this.router.navigateByUrl('/custom', {
        state: this.highrating,
      });
    });
  }
  getAnimeType(value: string) {
    this.router.navigateByUrl('/animetype/' + value, {
      state: { title: 'Popular now', data: this.dataType },
    });
  }
  feedback() {
    this.feedbackclick.emit();
  }
}
