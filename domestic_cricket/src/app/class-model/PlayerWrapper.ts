import { ClubModel } from './ClubModel';
import { TournamentModel } from './TournamentModel';
import { PlayerModel } from './PlayerModel';

export class PlayerWrapper {
    constructor(
        public playerList: PlayerModel[],
    ) { }
}