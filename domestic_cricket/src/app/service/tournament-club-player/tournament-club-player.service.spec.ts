import { TestBed } from '@angular/core/testing';

import { TournamentClubPlayerService } from './tournament-club-player.service';

describe('TournamentClubPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentClubPlayerService = TestBed.get(TournamentClubPlayerService);
    expect(service).toBeTruthy();
  });
});
