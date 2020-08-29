
import { MatchType } from './MatchType';
import { PlayerModel } from './PlayerModel';

export class FieldingScoreModel {
    constructor(
        public fieldingId: Number,
        public numberOfCatch: Number,
        public points: Number,
        public playerId : PlayerModel,
        public MatchType: MatchType,               
    ) { }
}