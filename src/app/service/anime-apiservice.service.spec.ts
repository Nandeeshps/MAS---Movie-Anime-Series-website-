import { TestBed } from '@angular/core/testing';

import { AnimeAPIServiceService } from './anime-apiservice.service';

describe('AnimeAPIServiceService', () => {
  let service: AnimeAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
