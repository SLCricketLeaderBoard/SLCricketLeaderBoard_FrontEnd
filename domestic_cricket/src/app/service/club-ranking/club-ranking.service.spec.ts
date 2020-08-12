import { TestBed } from '@angular/core/testing';

import { ClubRankingService } from './club-ranking.service';

describe('ClubRankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubRankingService = TestBed.get(ClubRankingService);
    expect(service).toBeTruthy();
  });
});
