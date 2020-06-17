import { BatmanTypeModel } from './BatmanTypeModel';
import { BallerTypeModel } from './BallerTypeModel';
import { ClubModel } from './ClubModel';
import { UserModel } from './UserModel';

export class PlayerModel {
    constructor(
        public playerId: Number,
        public specialType: Number,
        public batmanTypeId: BatmanTypeModel,
        public ballerTypeId: BallerTypeModel,
        public clubId: ClubModel,
        public userId: UserModel
    ) { }
}