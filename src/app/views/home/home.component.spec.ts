import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/api.service';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { AppModule } from 'src/app/app.module';
import { AppComponent } from 'src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: ApiService;

  let animeMock = {
    data: [
      {
        id: '10740',
        attributes: {
          canonicalTitle: 'One Punch Man',
          synopsis: 'string',
          episodeCount: 1,
          posterImage: {
            tiny: 'string',
            small: 'string',
            medium: 'string',
            large: 'string',
            original: 'string',
          },
        },
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        AppModule,
      ],
      providers: [],
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

  it('should fetch data from apiService', () => {
    spyOn(apiService, 'getPopular').and.returnValue(of(animeMock));
    spyOn(apiService, 'getHighrating').and.returnValue(of(animeMock));
    spyOn(apiService, 'getUpcoming').and.returnValue(of(animeMock));
    component.ngOnInit();
    expect(component.popular).toEqual(animeMock.data);
    expect(component.highrating).toEqual(animeMock.data);
    expect(component.upcoming).toEqual(animeMock.data);
  });
});
