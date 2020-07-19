import { UserModel } from './UserModel';

export class SponsorModel{
    constructor(
      public SponsorId:Number,
      public userId:UserModel,
      public companyName: String,
      public responsiblePerson: String
    ){}
}