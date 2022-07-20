import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';
import { AnimeTypeComponent } from './anime-type.component';

describe('AnimeTypeComponent', () => {
  const setupTestBed = () => {
    TestBed.configureTestingModule({
      declarations: [AnimeTypeComponent], //
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        AppModule,
      ],
      providers: [],
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
});
