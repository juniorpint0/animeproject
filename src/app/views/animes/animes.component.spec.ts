import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';
import { of } from 'rxjs';
import { AnimesComponent } from './animes.component';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';

describe('AnimesComponent', () => {
  let component: AnimesComponent;
  let fixture: ComponentFixture<AnimesComponent>;
  let apiService: ApiService;
  let dataService: DataService;
  let setAnime: DataService;
  let router: Router;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  const animeMock = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule],
      providers: [
        {
          provide: DataService,
          useValue: {
            setAnime: () => of(animeMock),
          },
        },
      ],
      declarations: [AnimesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    dataService = TestBed.inject(DataService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goToDetailsByService function', () => {
    const spyGo = spyOn(component, 'goToDetailsByService').and.callThrough();
    const spy = spyOn(component['router'], 'navigateByUrl');
    component.goToDetailsByService(animeMock);
    expect(spyGo).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('/details/edit/' + animeMock.id);
  });
});
