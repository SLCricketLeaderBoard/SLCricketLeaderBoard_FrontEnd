import { UserModel } from './UserModel';

export class UmpireModel{
    constructor(
      public umpireId:Number,
      public userId:UserModel
    ){}
}