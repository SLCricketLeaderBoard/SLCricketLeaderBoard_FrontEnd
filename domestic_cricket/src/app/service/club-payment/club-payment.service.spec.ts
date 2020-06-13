import { TestBed } from '@angular/core/testing';

import { ClubPaymentService } from './club-payment.service';

describe('ClubPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubPaymentService = TestBed.get(ClubPaymentService);
    expect(service).toBeTruthy();
  });
});
