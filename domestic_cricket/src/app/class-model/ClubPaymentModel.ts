import { ManagerModel } from './ManagerModel';
import { ClubModel } from './ClubModel';

export class ClubPaymentModel{
    constructor(
      public clubPaymentId:Number,
      public amount:Number,
      public paymentForYear:Number,
      public date:Date,
      public clubId:ClubModel
    ){}
}