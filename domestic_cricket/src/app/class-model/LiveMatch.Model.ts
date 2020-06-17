export class UserModel{
    constructor(
      public bowlerId:Number,
      public bowlerPlayer:string,
      public battingPlayer:string,
      public bowlSpeed: Number,
      public bowlerType: string, // no Wide live
      public runType: string, // legby real
      public runs: number,
      public wickets: number,
      public runRate: number,
      public tossWin: string,
      public bowlers: String,
      ){}
}


export class OverModel{
    constructor(
        public owner: String,
        public aginstRuns: number,
        public wickets: number,

    ){

    }
}

export class BatmenScore{
    constructor(
        public player: String,
        public runs: String,
        public facedNumOfOvers:String, 
    ){

    }
}


export class BowlerModel{
    constructor(
        public player:String,
        public numBerofOvers: number,
        public numberOfWickets: number,
        public numberOfRuns: number,
    ){

    }
}