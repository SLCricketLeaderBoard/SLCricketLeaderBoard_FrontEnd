import { MatchType } from './MatchType';
import { PlayerModel } from './PlayerModel';

export class BallerScoreModel {
    constructor(
        public ballerScoredId: Number,
        public mathcCount: Number,
        public overs: Number,
        public wickets: Number,
        public averageSpeed: Number,
        public wideBalls: Number,
        public noBalls: Number,
        public numberOfRunsAgainst: Number,
        public hatricks: Number,
        public playerId: PlayerModel,
        public matchTypeId: MatchType,
        public points: Number,                       
    ) { }
}