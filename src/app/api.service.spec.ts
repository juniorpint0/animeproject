import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  fit('getPopular deve buscar um objeto na API', () => {
    
    const getPopular = service.getPopular();
    expect(typeof(getPopular)).toBe('object');
  });
});
