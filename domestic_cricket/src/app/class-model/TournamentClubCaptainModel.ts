import { TournamentClubModel } from './TournamentClubModel';

export class TournamentClubCaptainModel {
    constructor(
        public tournamentClubCaptainId: Number,
        public captainId: Number,
        public viceCaptainId: Number,
        public tournamentClubId: TournamentClubModel
    ) { }
}