import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AppModule } from 'src/app/app.module';
import { AnimeTypeComponent } from './anime-type.component';
import { ActivatedRoute } from '@angular/router';

describe('AnimeTypeComponent', () => {
  let apiService: ApiService;
  let mockApiService: jasmine.SpyObj<ApiService>;
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
  const setupTestBed = () => {
    TestBed.configureTestingModule({
      declarations: [AnimeTypeComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        AppModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1, value: 'popular' }) },
        },
      ],
    });
  };
  

  const createComponent = () => {
    const fixture = TestBed.createComponent(AnimeTypeComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();
    return { fixture, component };
  };

  it('should create', () => {
    setupTestBed();
    const { component } = createComponent();

    expect(component).toBeTruthy();
  });

  it('should call goToDetailsByService function', () => {
    setupTestBed();
    const { component } = createComponent();

    const spyGo = spyOn(component, 'goToDetailsByService').and.callThrough();
    const spy = spyOn(component['router'], 'navigateByUrl');
    component.goToDetailsByService(animeMock);
    expect(spyGo).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('/details/edit/' + animeMock.id);
  });

  it('should fill "snapSearch" and "title" variables with apiService data from getPopular', () => {
    setupTestBed();
    const { component } = createComponent();

    spyOn(component['apiService'], 'getPopular').and.returnValue(
      of({
        data: [animeMock],
      })
    );

    component.ngOnInit();
    
    expect(component.snapSearch).toBe('popular');
    expect(component.title).toBe('Popular now');
  });

  it('should fill "snapSearch" and "title" variables with apiService data from getHighrating', () => {
    setupTestBed();   
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1, value: 'highrating' }) },
        },
      ],
    }); 
    const { component } = createComponent();

    spyOn(component['apiService'], 'getHighrating').and.returnValue(
      of({
        data: [animeMock],
      })
    );

    component.ngOnInit();
    
    expect(component.snapSearch).toBe('highrating');
    expect(component.title).toBe('High Rating');
  });

  it('should fill "snapSearch" and "title" variables with apiService data from getUpcoming', () => {
    setupTestBed();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1, value: 'upcoming' }) },
        },
      ],
    });
    const { component } = createComponent();

    spyOn(component['apiService'], 'getUpcoming').and.returnValue(
      of({
        data: [animeMock],
      })
    );

    component.ngOnInit();
    
    expect(component.snapSearch).toBe('upcoming');
    expect(component.title).toBe('Up Coming');
  });
});
