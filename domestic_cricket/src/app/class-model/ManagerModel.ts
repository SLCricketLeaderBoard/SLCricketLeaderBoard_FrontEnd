import { UserModel } from './UserModel';

export class ManagerModel{
    constructor(
      public managerId:Number,
      public userId:UserModel
    ){}
}