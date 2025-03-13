import { TestBed } from '@angular/core/testing';

import { APIURLService } from './apiurl.service';

describe('APIURLService', () => {
  let service: APIURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
