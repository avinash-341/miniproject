import { TestBed } from '@angular/core/testing';

import { HerovolleyballService } from './herovolleyball.service';

describe('HerovolleyballService', () => {
  let service: HerovolleyballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerovolleyballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
