import { AppModule } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;
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
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        AppModule,
      ],
      providers: [
        {
          provide: ApiService,
          useValue: {
            getAnimeByTitle: () =>
              of({
                data: mockApiService,
              }),
          },
        },
      ],
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
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
