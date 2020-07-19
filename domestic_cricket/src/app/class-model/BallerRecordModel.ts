import { SelectedPlayerModel } from './SelectedPlayerModel';

export class BallerRecordModel {
    constructor(
        public ballerRecordId: Number,
        public overs: Number,
        public numberOfRunsAgainst: Number,
        public wickets : Number,
        public hatTriks :Number,
        public selectedPlayerId : SelectedPlayerModel,
        public ballingPoints : Number,
        public numberOfWides : Number,
        public numberOfNos : Number,
        public avgSpeed : Number                
    ) { }
}