import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavComponent } from './sidenav.component';
import { AppModule } from '../app.module';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule],
      providers: [
        {
          provide: FormControl,
          useValue: { valueChanges: of('false') },
        },
      ],
      declarations: [SidenavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
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
  it('should use getInformation function to change checked variable', () => {
    component.getInformation();

    expect(component.checked).toBeTruthy();
  });

  it('should pass the empty value to the className variable', () => {
    component.checked = true;
    component.getInformation();

    expect(component.className).toBe('');
  });
});
