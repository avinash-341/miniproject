import { TestBed } from '@angular/core/testing';

import { HerofootballService } from './herofootball.service';

describe('HerofootballService', () => {
  let service: HerofootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerofootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
