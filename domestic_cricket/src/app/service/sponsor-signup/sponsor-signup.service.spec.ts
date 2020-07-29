import { TestBed } from '@angular/core/testing';

import { SponsorSignupService } from './sponsor-signup.service';

describe('SponsorSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SponsorSignupService = TestBed.get(SponsorSignupService);
    expect(service).toBeTruthy();
  });
});
