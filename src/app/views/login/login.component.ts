import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  msgemail = '';
  msgpass = '';
  form: any = {
    username: null,
    password: null,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    const { username, password } = this.form;

    if (
      username != '' &&
      password != '' &&
      this.msgemail == '' &&
      this.msgpass == ''
    ) {
      this.router.navigate(['/']);
    }
  }
  validationEmail() {
    const { username } = this.form;
    let user = username.substring(0, username.indexOf('@'));
    let domain = username.substring(username.indexOf('@') + 1, username.length);

    if (
      user.length >= 1 &&
      domain.length >= 3 &&
      user.search('@') == -1 &&
      domain.search('@') == -1 &&
      user.search(' ') == -1 &&
      domain.search(' ') == -1 &&
      domain.search('.') != -1 &&
      domain.indexOf('.') >= 1 &&
      domain.lastIndexOf('.') < domain.length - 1
    ) {
      this.msgemail = '';
    } else {
      this.msgemail = 'Invalid email';
    }
  }
  validationPassword() {
    const { password } = this.form;
    if (
      password.length >= 1 &&
      password.search(' ') == -1 &&
      password.search(' ') == -1
    ) {
      this.msgpass = '';
    } else {
      this.msgpass = 'Invalid password';
    }
  }
}
