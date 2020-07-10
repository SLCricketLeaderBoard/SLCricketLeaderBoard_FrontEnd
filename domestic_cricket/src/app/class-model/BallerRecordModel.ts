import { SelectedPlayerModel } from './SelectedPlayerModel';

export class BallerRecord {
    constructor(
        public ballerRecordId: Number,
        public overs: Number,
        public numberOfRunsAgainst: Number,
        public wickets : Number,
        public hatTriks :Number,
        public selectedPlayerId : SelectedPlayerModel,
        public ballingPoints : Number
                
    ) { }
}