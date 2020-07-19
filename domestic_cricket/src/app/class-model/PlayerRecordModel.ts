import { BallerRecordModel } from './BallerRecordModel';
import { BatmanRecordModel } from './BatmanRecordModel';
import { FieldingRecordModel } from './FieldingRecordModel';

export class PlayerRecordModel {
    constructor(
        public batmanRecord: BatmanRecordModel,
        public ballerRecord: BallerRecordModel,
        public fieldingRecord: FieldingRecordModel,
    ) { }
}