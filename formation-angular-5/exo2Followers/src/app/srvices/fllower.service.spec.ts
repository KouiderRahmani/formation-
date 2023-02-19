import { TestBed } from '@angular/core/testing';

import { FllowerService } from './fllower.service';

describe('FllowerService', () => {
  let service: FllowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FllowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
