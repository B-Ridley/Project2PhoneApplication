import { TestBed } from '@angular/core/testing';

import { PhoneplansService } from './phoneplans.service';

describe('PhoneplansService', () => {
  let service: PhoneplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
