import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the email validation in case it is wrong', () => {
    spyOn(component, 'validationEmail').and.callThrough();
    let input = fixture.debugElement.query(By.css('#inputemail')).nativeElement;
    component.form.email = 'testtest.com';
    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.msgemail).toBe('Invalid email');
  });
  it('should test email validation if it is correct', () => {
    spyOn(component, 'validationEmail').and.callThrough();
    let input = fixture.debugElement.query(By.css('#inputemail')).nativeElement;
    component.form.email = 'test@test.com';
    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.msgemail).toBe('');
  });

  it('should test the password validation in case it is wrong', () => {
    spyOn(component, 'validationPassword').and.callThrough();
    let input = fixture.debugElement.query(
      By.css('#inputpassword')
    ).nativeElement;
    component.form.password = ' test';
    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.msgpass).toBe('Invalid password');
  });

  it('should test password validation if it is correct', () => {
    spyOn(component, 'validationPassword').and.callThrough();
    let input = fixture.debugElement.query(
      By.css('#inputpassword')
    ).nativeElement;
    component.form.password = 'test';
    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.msgpass).toBe('');
  });

  it('should call the onSubmit function which waits for the information to be filled in and change the route', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    component.form.password = 'test';
    component.form.email = 'test@test.com';
    component.onSubmit();

    expect(component['router'].navigate).toBeTruthy();
  });
});
