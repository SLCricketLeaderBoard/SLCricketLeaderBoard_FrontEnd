export class UserModel{
    constructor(
      public userId:Number,
      public userName:String,
      public fullName:String,
      public nameWithInitial:String,
      public nic:String,
      public contactNumber:String,
      public role:Number,
      public email:String,
      public password:String,
      public address:String,
      public regDate:Date
    ){}
}