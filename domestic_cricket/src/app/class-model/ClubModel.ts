import { ManagerModel } from './ManagerModel';

export class ClubModel{
    constructor(
      public clubId:Number,
      public clubName:String,
      public address:String,
      public email:String,
      public contactNumber:String,
      public winMatch:Number,
      public failMatch:Number,
      public growMatch:Number,
      public regDate:Date,
      public managerId:ManagerModel
    ){}
}