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

  openSection() {
    this.router.navigate(['/']);
  }

  searchAnime(value: any) {
    this.router.navigateByUrl('/anime/' + value);
  }
 
  getAnimeType(value: string) {
    this.router.navigateByUrl('/animetype/' + value);
  }
  feedback() {
    this.feedbackclick.emit();
  }
}
