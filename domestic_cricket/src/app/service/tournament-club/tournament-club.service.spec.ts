import { TestBed } from '@angular/core/testing';

import { TournamentClubService } from './tournament-club.service';

describe('TournamentClubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentClubService = TestBed.get(TournamentClubService);
    expect(service).toBeTruthy();
  });
});
