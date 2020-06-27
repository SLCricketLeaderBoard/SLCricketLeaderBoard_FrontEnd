import { ClubModel } from './ClubModel';
import { TournamentModel } from './TournamentModel';

export class TournamentClubModel {
    constructor(
        public tournamentClubId: Number,
        public clubId: ClubModel,
        public tournamentId: TournamentModel
    ) { }
}