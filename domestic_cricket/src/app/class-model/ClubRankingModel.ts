import { MatchType } from './MatchType';
import { ClubModel } from './ClubModel';

export class ClubRankingModel {
    constructor(
        public clubRankingid: Number,
        public matchTypeId: MatchType,
        public clubId: ClubModel,
        public rating: Number,
        public points: Number,
        public numMatch: Number
    ) { }
}