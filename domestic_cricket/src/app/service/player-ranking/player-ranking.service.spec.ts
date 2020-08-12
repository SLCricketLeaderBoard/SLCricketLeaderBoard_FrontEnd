import { TestBed } from '@angular/core/testing';

import { PlayerRankingService } from './player-ranking.service';

describe('PlayerRankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerRankingService = TestBed.get(PlayerRankingService);
    expect(service).toBeTruthy();
  });
});
