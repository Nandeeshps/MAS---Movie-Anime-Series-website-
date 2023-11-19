import { TestBed } from '@angular/core/testing';

import { MovieAPIServiceService } from './movie-apiservice.service';

describe('MovieAPIServiceService', () => {
  let service: MovieAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
