
export class PlayerMatchDataModel {
    constructor(
        public tournament: string,
        public match: string,
        public result1: string,//Batting :runs   Balling:overs
        public result2: string,//Batting :balls   Balling:wickets            
    ) { }
}