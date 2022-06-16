import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomService } from './custom.service';

describe('CustomService', () => {
  let service: CustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });
    service = TestBed.inject(CustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
