import { MatchModel } from './MatchModel';
import { PlayerModel } from './PlayerModel';

export class SelectedPlayerModel {
    constructor(
        public selectedPlayerId: Number,
        public matchId: MatchModel,
        public playerId: PlayerModel,
        public state: Number
    ) { }
}