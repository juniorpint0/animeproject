import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AppModule } from 'src/app/app.module';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let apiService: ApiService;

  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        AppModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '10740' } } },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shold have title', () => {
    component.attributes = {
      ...component.attributes,
      canonicalTitle: 'New title',
    };
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('.title'));
    expect(
      (elementTitle.nativeElement as HTMLAnchorElement).textContent
    ).toContain('New title');
  });

  it("should return ApiService from getAnimeById as 'One Punch Man'", () => {
    spyOn(apiService, 'getAnimeById').and.returnValue(
      of({
        data: {
          attributes: 'One Punch Man',
        },
      })
    );
    component.ngOnInit();
    expect(component.attributes).toBe('One Punch Man');
  });
});
