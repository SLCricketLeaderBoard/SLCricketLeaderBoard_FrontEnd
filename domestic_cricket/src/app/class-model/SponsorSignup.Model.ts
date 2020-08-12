import { UserModel } from './UserModel';

export class SponsorsignupModel {
    constructor(
        public company_name: String,
        public address: String,
        public email: String,
        public contact_number: Number,
        public responsible_person: String,
        public nic: String,
        public userId: UserModel
    ) { }
}