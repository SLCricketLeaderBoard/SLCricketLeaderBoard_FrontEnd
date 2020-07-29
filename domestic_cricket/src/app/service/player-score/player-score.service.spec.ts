import { TestBed } from '@angular/core/testing';

import { PlayerScoreService } from './player-score.service';

describe('PlayerScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerScoreService = TestBed.get(PlayerScoreService);
    expect(service).toBeTruthy();
  });
});
