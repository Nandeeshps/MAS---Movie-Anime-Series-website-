import { TestBed } from '@angular/core/testing';

import { SeriesAPIServiceService } from './series-apiservice.service';

describe('SeriesAPIServiceService', () => {
  let service: SeriesAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
