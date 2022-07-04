import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET with correct endpoint', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getData();
    expect(spy).toHaveBeenCalledWith(
      'https://kitsu.io/api/edge/anime?page[limit]=10'
    );
  });

  it('should fetch an object in getData API', () => {
    const getData = service.getData();
    expect(typeof getData).toBe('object');
  });
  it('should fetch an object in getPopular API', () => {
    const getPopular = service.getPopular();
    
    expect(typeof getPopular).toBe('object');
  });
  it('should fetch an object in getHighrating API', () => {
    const getHighrating = service.getHighrating();
    expect(typeof getHighrating).toBe('object');
  });
  it('should fetch an object in getUpcoming API', () => {
    const getUpcoming = service.getUpcoming();
    expect(typeof getUpcoming).toBe('object');
  });
  it('should fetch an object in getAnimeById API', () => {
    const getAnimeById = service.getAnimeById('01');
    expect(typeof getAnimeById).toBe('object');
  });
  it('should fetch an object in getAnimeByTitle API', () => {
    const getAnimeByTitle = service.getAnimeByTitle('naruto');
    expect(typeof getAnimeByTitle).toBe('object');
  });
  it('should fetch an object in getAnimesByGenre API', () => {
    const getAnimesByGenre = service.getAnimesByGenre('action');
    expect(typeof getAnimesByGenre).toBe('object');
  });

});
