import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/api.service';
import {  of } from 'rxjs';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { AppComponent } from 'src/app/app.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: ApiService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule],
      providers: [
        ApiService,
        // {
        //   provide: ApiService,
        //   useValue: {
        //     getPopular: () =>
        //       of({
        //         data: 'One Punch Man',

        //       }),
        //   },
        // },
      ],
      declarations: [HomeComponent, AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
