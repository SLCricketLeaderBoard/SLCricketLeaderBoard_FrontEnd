export class MatchScorePredictionModel {
    constructor(
        public runs: Number,
        public wickets: Number,
        public overs: Number,
        public striker: Number,
        public nonStriker: Number
    ) { }
}