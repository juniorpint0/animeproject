import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // {
        //   provide: DataService,
        //   useValue: {
        //     getAnime: () =>
        //       of({
        //         data: 'test',
        //       }),
        //   },
        // },
      ],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an object', () => {
    service['anime'] = { data: 'test' };

    service.getAnime();
    expect(service.getAnime()).toEqual({ data: 'test' });
  });
});
