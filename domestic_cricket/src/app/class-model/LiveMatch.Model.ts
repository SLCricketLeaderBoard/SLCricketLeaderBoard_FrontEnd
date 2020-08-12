import { ClubModel } from './ClubModel';

export class LiveScoreModel{
    constructor(
      public inning:Number,
      public battingClub:ClubModel,
      public fieldingClub:ClubModel,
      public runs: Number,
      public wicket: Boolean, // no Wide live
      public ballerState: String, // legby real
      public striker: String,
      public nonStriker: String,
      public bowler: String,
      public score: Number,
      public numberofBalls: Number,
      public runrate : Number,
      public numberOfWickets: Number,
      ){}
}

