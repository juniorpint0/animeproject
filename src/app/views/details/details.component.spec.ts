
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api.service';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let apiService: ApiService;
  let httpClient: HttpClient;

  let mockApiService: jasmine.SpyObj<ApiService>;


  beforeEach(async () => {
  
    
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: ApiService,
          useValue: {
            getAnimeById: () =>
              of({
                data: {
                  attributes: 'One Punch Man',
                },
              }),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '10740' } } },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    
    // TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule, RouterTestingModule],
    // });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should create the app', () => {
  //   apiService = new ApiService(httpClient);
  //   expect(apiService).toBeTruthy();
  // });

  // it('should return value for idAnime', () => {
  //   component.idAnime = '10740';
  //   expect(typeof(component.idAnime)).toBe('string');
  // });

  // it('should return value for queryAnime', () => {
  //   component.idAnime = '10740';
  //   apiService = new ApiService(httpClient);
  //   apiService.getAnimeById(component.idAnime).subscribe((response) => {
  //     component.attributes = response.attributes;
  //   });
  //   expect(typeof(component.attributes)).toBe('');
  // });

  it('shold have title', () => {
    component.attributes = {
      ...component.attributes,
      canonicalTitle: 'New title',
    };
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('.title'))
    expect((elementTitle.nativeElement as HTMLAnchorElement).textContent).toContain('New title')
    
  })


  it("should return ApiService from getAnimeById as 'One Punch Man'", () => {
    component.idAnime = '10740';
    // let service = fixture.debugElement.injector.get(ApiService);
    // spyOn(apiService, 'getAnimeById').and.returnValue(
    //   of({})

    // );
    // mockApiService.getAnimeById.and.returnValue(component.idAnime);
    console.log('Entrou', component.attributes);
    expect(component.attributes).toBe('One Punch Man');
  });
});



