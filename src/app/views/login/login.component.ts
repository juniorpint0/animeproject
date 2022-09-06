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
    email: null,
    password: null,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    const { email, password } = this.form;

    if (
      email != '' &&
      password != '' &&
      this.msgemail == '' &&
      this.msgpass == ''
    ) {
      this.router.navigate(['/']);
    }
  }
  validationEmail() {
    const { email } = this.form;
    let user = email.substring(0, email.indexOf('@'));
    let domain = email.substring(email.indexOf('@') + 1, email.length);

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
    if (password.length >= 1 && password.search(' ') == -1) {
      this.msgpass = '';
    } else {
      this.msgpass = 'Invalid password';
    }
  }
}
