import { Component, OnInit } from '@angular/core';
import { MatchModel } from '../../class-model/MatchModel';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from '../../service/match/match.service';
import { TournamentService } from '../../service/tournament/tournament.service';
import { ThreeFourDaysMatchModel } from '../../class-model/ThreeFourDaysMatchModel';

@Component({
  selector: 'app-referee-match-list',
  templateUrl: './referee-match-list.component.html',
  styleUrls: ['./referee-match-list.component.scss']
})
export class RefereeMatchListComponent implements OnInit {

  playedMatches:MatchModel[];
  toPlayMatches:MatchModel[];
  updatedMatches: MatchModel[];

  threeFourDayMathcesPlayedUpdated: ThreeFourDaysMatchModel[] =[];
  oneDayPlayedUpdatedMatches: MatchModel[]=[];
  tTwentyPlayedUpdatedMatches: MatchModel[]=[];



  oneDayUpcommingMatches: MatchModel[]=[];
  tTwentyUpcommingMathces: MatchModel[]=[];
  threeFourDayMathcesUpcomming: ThreeFourDaysMatchModel[] =[];
  
  oneDayPlayedMatches: MatchModel[]=[];
  tTwentyPlayedMatches: MatchModel[]=[];
  threeFourDayPlayedMatches: ThreeFourDaysMatchModel[] =[];


  tournamentId:number;
  userId:String
  constructor(private router: Router, private route: ActivatedRoute,private matchService:MatchService,private tournamentService:TournamentService) {
    this.route.params.subscribe(res => {
      this.tournamentId = res['tournamentId'];
    })

    this.userId=sessionStorage.getItem('userId');
   }

  ngOnInit() {

      this.matchService.getRefereeMatchesPlayedOneDay(this.tournamentId,this.userId).subscribe(res=>{
        this.oneDayPlayedMatches=res;
      })


      this.matchService.getRefereeMatchesPlayedTTwenty(this.tournamentId,this.userId).subscribe(res=>{
        this.tTwentyPlayedMatches=res;
        console.log(res                                                                                                         );
        

      })
                                                                                                              
      this.matchService.getRefereeMatchesPlayed34Days(this.tournamentId,this.userId).subscribe(res=>{
        res.forEach(x=>{
          console.log(x);  
          const matchPlayed: ThreeFourDaysMatchModel = new ThreeFourDaysMatchModel(null,null);
          if(x.testMatchId){  
            if(x.testMatchId!=x.matchId){
              matchPlayed.secondInning=x;
              console.log("secon innigs");
              this.threeFourDayPlayedMatches.push(matchPlayed);
            }else if(x.testMatchId==x.matchId){
              matchPlayed.firstInning=x;
              console.log("first innigs");
            }          
          }
        })
      })


      this.matchService.getRefereeMatchesPlayedUpdatedOneDay(this.tournamentId,this.userId).subscribe(res=>{
        this.oneDayPlayedUpdatedMatches=res;
      })

      this.matchService.getRefereeMatchesPlayedUpdatedTTwenty(this.tournamentId,this.userId).subscribe(res=>{
        this.tTwentyPlayedUpdatedMatches=res;
        res.forEach(x=>{
          console.log(x);
        })
      })

      this.matchService.getRefereeMatchesPlayedUpdated34Days(this.tournamentId,this.userId).subscribe(res=>{
        res.forEach(x=>{
          console.log(x);  
          const matchPlayed: ThreeFourDaysMatchModel = new ThreeFourDaysMatchModel(null,null);
          if(x.testMatchId){  
            if(x.testMatchId!=x.matchId){
              matchPlayed.secondInning=x;
              console.log("secon innigs");
              this.threeFourDayMathcesPlayedUpdated.push(matchPlayed);
            }else if(x.testMatchId==x.matchId){
              matchPlayed.firstInning=x;
              console.log("first innigs");
            }          
          }
        })
      })


      this.matchService.getRefereeMatchesUpcommingOneDay(this.tournamentId,this.userId).subscribe(res=>{
        this.oneDayUpcommingMatches=res;
      })

      this.matchService.getRefereeMatchesUpcommingTTwenty(this.tournamentId,this.userId).subscribe(res=>{
        this.tTwentyUpcommingMathces=res;
      })


      this.matchService.getRefereeMatchesUpcomming34Days(this.tournamentId,this.userId).subscribe(res=>{
        res.forEach(x=>{
          console.log(x);  
          const matchPlayed: ThreeFourDaysMatchModel = new ThreeFourDaysMatchModel(null,null);
          if(x.testMatchId){  
            if(x.testMatchId!=x.matchId){
              matchPlayed.secondInning=x;
              console.log("secon innigs");
              this.threeFourDayMathcesUpcomming.push(matchPlayed);
            }else if(x.testMatchId==x.matchId){
              matchPlayed.firstInning=x;
              console.log("first innigs");
            }          
          }
        })
      })



    this.matchService.getRefereeMatchesPlayed(this.tournamentId,this.userId).subscribe(res=>{
      this.playedMatches=res;
      
      

      // res.forEach(x=>{
      //   console.log(x);
        
      //   if(x.matchTypeId.matchTypeId==1){
      //     this.oneDayPlayedMatches.push(x);
      //   }else if(x.matchTypeId.matchTypeId==3){
      //     this.tTwentyPlayedMatches.push(x);
      //   }

      //   const matchPlayed: ThreeFourDaysMatchModel = new ThreeFourDaysMatchModel(null,null);
      //   if(x.testMatchId){  
      //     if(x.testMatchId!=x.matchId){
      //       matchPlayed.secondInning=x;
      //       console.log("secon innigs");
      //       this.threeFourDayPlayedMatches.push(matchPlayed);
      //     }else if(x.testMatchId==x.matchId){
      //       matchPlayed.firstInning=x;
      //       console.log("first innigs");
      //     }          
      //   }
      // })

    })


                                                                                                                               
    this.matchService.getRefereeMatchesUpcomming(this.tournamentId,this.userId).subscribe(res=>{
     
      this.toPlayMatches=res;
   
      // const matchUpcomming: ThreeFourDaysMatchModel = new ThreeFourDaysMatchModel(null,null);
      // res.forEach(x=>{
      //   console.log(x);
      //   if(x.matchTypeId.matchTypeId==1){
      //     this.oneDayUpcommingMatches.push(x);
      //   }else if(x.matchTypeId.matchTypeId==3){
      //     this.tTwentyUpcommingMathces.push(x);
      //   }

      //   if(x.testMatchId){  
      //     if(x.testMatchId!=x.matchId){
      //       matchUpcomming.secondInning=x;
      //       console.log("secon innigs");
      //       this.threeFourDayMathcesUpcomming.push(matchUpcomming);
      //     }else if(x.testMatchId==x.matchId){
      //       matchUpcomming.firstInning=x;
      //       console.log("first innigs");
      //     }          
      //   }
      // })
    })

    this.matchService.getRefereeMatchesPlayedUpdated(this.tournamentId,this.userId).subscribe(res=>{
     
      this.updatedMatches=res;
      console.log(res);
      

     
      // const matchplayedUpdated: ThreeFourDaysMatchModel = new ThreeFourDaysMatchModel(null,null);
      // res.forEach(x=>{
      //   console.log(x);
      //   if(x.matchTypeId.matchTypeId==1){
      //     this.oneDayPlayedUpdatedMatches.push(x);
      //   }else if(x.matchTypeId.matchTypeId==3){
      //     this.tTwentyPlayedUpdatedMatches.push(x);
      //   }
      //   if(x.testMatchId){  
      //     if(x.testMatchId!=x.matchId){
      //       matchplayedUpdated.secondInning=x;
      //       console.log("secon innigs");
      //       this.threeFourDayMathcesPlayedUpdated.push(matchplayedUpdated);
      //     }else if(x.testMatchId==x.matchId){
      //       matchplayedUpdated.firstInning=x;
      //       console.log("first innigs");
      //     }          
      //   }
      // })
      
    })

  }

}
