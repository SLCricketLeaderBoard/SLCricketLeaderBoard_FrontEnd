import { SelectedPlayerModel } from './SelectedPlayerModel';

export class BatmanRecordModel {
    constructor(
        public batmanRecordId: Number,
        public battingRuns: Number,
        public facedBalls: Number,
        public fours : Number,
        public sixes :Number,
        public notOut :Number,
        public selectedPlayerId : SelectedPlayerModel,
        public halfentury :Number,
        public sentury :Number,
        public doubleSentury :Number,
        public tripleSentury :Number,
        public foubleSentury :Number,
        public fivebleSentury :Number,
        public battingPoints :Number,   
        public strikeRate : Number             
    ) { }
}