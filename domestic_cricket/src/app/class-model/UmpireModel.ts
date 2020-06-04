import { UserModel } from './UserModel';

export class UmpireModel{
    constructor(
      public umpireId:Number,
      public noMatch:Number,
      public correctDecision:Number,
      public wrongDecision:Number,
      public userId:UserModel
    ){}
}