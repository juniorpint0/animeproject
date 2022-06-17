import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimeTypeComponent } from './anime-type.component';

// describe('AnimeTypeComponent', () => {
//   let component: AnimeTypeComponent;
//   let fixture: ComponentFixture<AnimeTypeComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AnimeTypeComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AnimeTypeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
  describe('AnimeTypeComponent', () => {
    const setupTestBed = () => {
      TestBed.configureTestingModule({
        declarations: [AnimeTypeComponent], //
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          BrowserAnimationsModule,
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
