import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor() {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((val) => {
      this.className = val ? 'darkMode' : 'lightMode';
    });
  }
}
