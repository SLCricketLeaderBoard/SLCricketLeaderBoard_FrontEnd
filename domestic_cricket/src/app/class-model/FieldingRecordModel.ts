
import { SelectedPlayerModel } from './SelectedPlayerModel';

export class FieldingRecordModel {
    constructor(
        public fieldingRecordId: Number,
        public catches: Number,
        public selectedPlayerId : SelectedPlayerModel,
        public fieldingPoints: Number,               
    ) { }
}