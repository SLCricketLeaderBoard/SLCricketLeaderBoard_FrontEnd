import { UserModel } from './UserModel';

export class RefereeModel{
    constructor(
      public RefereeId:Number,
      public userId:UserModel
    ){}
}