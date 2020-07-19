import { TestBed } from '@angular/core/testing';

import { PlayerRecordService } from './player-record.service';

describe('PlayerRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerRecordService = TestBed.get(PlayerRecordService);
    expect(service).toBeTruthy();
  });
});
