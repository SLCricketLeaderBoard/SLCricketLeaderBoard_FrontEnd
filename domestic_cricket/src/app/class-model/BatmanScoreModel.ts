import { MatchType } from './MatchType';
import { PlayerModel } from './PlayerModel';
import { SelectedPlayerModel } from './SelectedPlayerModel';

export class BatmanScoreModel {
    constructor(
        public batmanScoreId: Number,
        public matchCount: Number,
        public notOut: Number,
        public four : Number,
        public six :Number,
        public playerId :PlayerModel,
        public matchTypeId : MatchType,
        public points :Number,
        public halfCenturies :Number,
        public centuries :Number,
        public doubleCenturies :Number,
        public tripleCenturies: Number,
        public fourbleCenturies :Number,
        public fivebleCenturies :Number,
        public strikeRate :Number,   
           
    ) { }
}