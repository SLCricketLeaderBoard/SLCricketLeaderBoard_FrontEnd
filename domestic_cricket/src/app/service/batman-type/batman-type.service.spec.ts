import { TestBed } from '@angular/core/testing';

import { BatmanTypeService } from './batman-type.service';

describe('BatmanTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatmanTypeService = TestBed.get(BatmanTypeService);
    expect(service).toBeTruthy();
  });
});
