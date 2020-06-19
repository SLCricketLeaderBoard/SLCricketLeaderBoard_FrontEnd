import { TestBed } from '@angular/core/testing';

import { BallerTypeService } from './baller-type.service';

describe('BallerTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BallerTypeService = TestBed.get(BallerTypeService);
    expect(service).toBeTruthy();
  });
});
