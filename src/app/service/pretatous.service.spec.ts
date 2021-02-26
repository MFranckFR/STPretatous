import { TestBed } from '@angular/core/testing';

import { PretatousService } from './pretatous.service';

describe('PretatousService', () => {
  let service: PretatousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PretatousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
