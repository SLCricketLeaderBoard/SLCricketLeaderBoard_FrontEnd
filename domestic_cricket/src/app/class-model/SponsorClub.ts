import { MatchModel } from './MatchModel';
import { PlayerModel } from './PlayerModel';
import { SponsorModel } from './SponsorModel';
import { ClubModel } from './ClubModel';

export class SponsorClub {
    constructor(
        public sponsorClubId: Number,
        public status: Number,
        public sponsorId: SponsorModel,
        public clubId: ClubModel
    ) { }
}