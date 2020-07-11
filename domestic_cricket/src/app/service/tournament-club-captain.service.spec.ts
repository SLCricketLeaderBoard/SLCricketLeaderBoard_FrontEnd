import { TestBed } from '@angular/core/testing';

import { TournamentClubCaptainService } from './tournament-club-captain.service';

describe('TournamentClubCaptainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentClubCaptainService = TestBed.get(TournamentClubCaptainService);
    expect(service).toBeTruthy();
  });
});
