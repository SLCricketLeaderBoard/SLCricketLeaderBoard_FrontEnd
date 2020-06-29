import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchModel } from '../../../../../class-model/MatchModel';
import { MatchService } from '../../../../../service/match/match.service';
import { ClubModel } from '../../../../../class-model/ClubModel';
import { PlayerModel } from '../../../../../../app/class-model/PlayerModel';
import { UmpireModel } from '../../../../../../app/class-model/UmpireModel';
import { ClubService } from '../../../../../service/club/club.service';
import { PlayerService } from '../../../../../service/player/player.service';
import { UmpireService } from '../../../../../service/umpire/umpire.service';
import { RefereeService } from '../../../../../service/referee/referee.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  match:MatchModel;
  matchId: Number;
  club01:ClubModel;
  club02:ClubModel;
  captainClubOne : PlayerModel
  captainClubTwo : PlayerModel
  winTeamId:ClubModel
  umpireOne: UmpireModel
  umpireTwo: UmpireModel
  umpireThree: UmpireModel
  tossWinTeam: ClubModel
  clubOneViceCaptain: PlayerModel
  clubTwoViceCaptain: PlayerModel
  clubOneKeper: PlayerModel
  clubTwoKeper: PlayerModel
  manOfTheMatch: PlayerModel  
  currentDate : Date
  state:any

  constructor(private route: ActivatedRoute,private matchService:MatchService,private clubService:ClubService,private playerService:PlayerService,private umpireService:UmpireService,private refreeService:RefereeService) {
    
    this.currentDate = new Date();

    this.route.params.subscribe(res => {
      this.matchId = res['matchId'];
      this.matchService.getMatchById(this.matchId).subscribe(res=>{
        console.log(res);
        this.match=res;

        
          if(this.match.startDate<this.currentDate){
            this.state=true;
            console.log(this.state);
            console.log("true hereeee");
            

            
          }else{
            this.state=false;
            console.log(this.state);
          }


                  this.clubService.getClubData(this.match.clubOneId).subscribe(res=>{
                    console.log(res);
                    this.club01=res;
                  })

                  
                  this.clubService.getClubData(this.match.clubTwoId).subscribe(res=>{
                    console.log(res);
                    this.club02=res;
                  })

                  this.clubService.getClubData(this.match.tossWinTeam).subscribe(res=>{
                    console.log(res);
                    this.tossWinTeam=res;
                  },error=>{
                    console.log(error);
                    
                  })


                  this.clubService.getClubData(this.match.winTeamId).subscribe(res=>{
                    console.log(res);
                    this.winTeamId=res;
                  },error=>{
                    console.log(error);
                    
                  })

                  this.playerService.getPlayer(this.match.captainClubOne).subscribe(res=>{
                    console.log(res);
                    this.captainClubOne=res;
                  },error=>{
                    console.log(error);
                    
                  })

                  this.playerService.getPlayer(this.match.captainClubTwo).subscribe(res=>{
                    console.log(res);
                    this.captainClubTwo=res;
                  },error=>{
                    console.log(error);
                    
                  })


                  this.playerService.getPlayer(this.match.clubOneViceCaptain).subscribe(res=>{
                    console.log(res);
                    this.clubOneViceCaptain=res;
                  },error=>{
                    console.log(error);
                    
                  })


                  this.playerService.getPlayer(this.match.clubTwoViceCaptain).subscribe(res=>{
                    console.log(res);
                    this.clubTwoViceCaptain=res;
                  },error=>{
                    console.log(error);
                    
                  })

                  this.playerService.getPlayer(this.match.clubOneKeper).subscribe(res=>{
                    console.log(res);
                    this.clubOneKeper=res;
                  },error=>{
                    console.log(error);
                    
                  })


                  this.playerService.getPlayer(this.match.clubTwoKeper).subscribe(res=>{
                    console.log(res);
                    this.clubTwoKeper=res;
                  },error=>{
                    console.log(error);
                    
                  })


                  this.playerService.getPlayer(this.match.manOfTheMatch).subscribe(res=>{
                    console.log(res);
                    this.manOfTheMatch=res;
                  },error=>{
                    console.log(error);
                    
                  })

                  this.umpireService.getUmpire(this.match.umpireOneId).subscribe(res=>{
                    console.log(res);
                    this.umpireOne=res;
                  },error=>{
                    console.log(error);
                    
                  })


                  this.umpireService.getUmpire(this.match.umpireTwoId).subscribe(res=>{
                    console.log(res);
                    this.umpireTwo=res;
                  },error=>{
                    console.log(error);
                    
                  })

                  this.umpireService.getUmpire(this.match.umpireThreeId).subscribe(res=>{
                    console.log(res);
                    this.umpireThree=res;
                  },error=>{
                    console.log(error);
                    
                  })


      })
    })
    
   }

  ngOnInit() {

  }

  mathcState(matchDate:Date,matchTime:String){

    


    return true;
  }

}
