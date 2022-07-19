import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule],
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to main page', () => {
    const spy = spyOn(component, 'openSection').and.callThrough();
    const el = fixture.debugElement.query(By.css('.logo')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should look for answers for the result "naruto"', () => {
    spyOn(component, 'searchAnime').and.callThrough();
    let input = fixture.debugElement.query(By.css('#search'));
    let inputElement = input.nativeElement;
    inputElement.value = 'naruto';
    inputElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.searchAnime).toHaveBeenCalled();
  });

  it('should use getAnimeType function passing "popular"', () => {
    spyOn(component, 'getAnimeType').and.callThrough();
    component.getAnimeType('popular');

    expect(component.getAnimeType).toHaveBeenCalled();
  });

  it('should call a feedback function', () => {
    spyOn(component, 'feedback').and.callThrough();
    let input = fixture.debugElement.query(By.css('#toggle2'));
    let inputElement = input.nativeElement;
    inputElement.click();
    fixture.detectChanges();

    expect(component.feedback).toHaveBeenCalled();
  });
});
