import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GUEST_USER_EMAIL, GUEST_USER_PASSWORD } from '../../app.constants';
import { UserAuthenticationServiceService } from '../../service/user/user-authentication-service.service';
import { ClubModel } from '../../class-model/ClubModel';
import { MatchModel } from '../../class-model/MatchModel';
import { PlayerModel } from '../../class-model/PlayerModel';
import { UmpireModel } from '../../class-model/UmpireModel';
import { ClubService } from '../../service/club/club.service';
import { MatchService } from '../../service/match/match.service';
import { PlayerService } from '../../service/player/player.service';
import { RefereeService } from '../../service/referee/referee.service';
import { UmpireService } from '../../service/umpire/umpire.service';

@Component({
  selector: 'app-pub-match-details',
  templateUrl: './pub-match-details.component.html',
  styleUrls: ['./pub-match-details.component.scss']
})
export class PubMatchDetailsComponent implements OnInit {



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

  club1Players: PlayerModel[]
  club2Players: PlayerModel[]
  errorMessage

  constructor(private userAuthenticationService: UserAuthenticationServiceService,private route: ActivatedRoute,private matchService:MatchService,private clubService:ClubService,private playerService:PlayerService,private umpireService:UmpireService,private refreeService:RefereeService) {
    
    this.currentDate = new Date();


      let email: string = GUEST_USER_EMAIL;
      let password: string = GUEST_USER_PASSWORD;
      this.userAuthenticationService
        .executeJWTAuthenticationService(
          email,
          password
        )
        .subscribe(
          (response) => {
            console.log("Success request for guest user")

            this.route.params.subscribe(res => {
              this.matchId = res['matchId'];
              this.matchService.getMatchById(this.matchId).subscribe(res=>{
                console.log(res);
                this.match=res;
        
                
           
                          this.clubService.getClubData(this.match.clubOneId).subscribe(res=>{
                            
                            this.club01=res;
                          })
        
                          
                          this.clubService.getClubData(this.match.clubTwoId).subscribe(res=>{
                           
                            this.club02=res;
                          })
        
                          this.clubService.getClubData(this.match.tossWinTeam).subscribe(res=>{
                           
                            this.tossWinTeam=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
        
                          this.clubService.getClubData(this.match.winTeamId).subscribe(res=>{
                            
                            this.winTeamId=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
                          this.playerService.getPlayer(this.match.captainClubOne).subscribe(res=>{
                           
                            this.captainClubOne=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
                          this.playerService.getPlayer(this.match.captainClubTwo).subscribe(res=>{
                           
                            this.captainClubTwo=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
        
                          this.playerService.getPlayer(this.match.clubOneViceCaptain).subscribe(res=>{
                            
                            this.clubOneViceCaptain=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
        
                          this.playerService.getPlayer(this.match.clubTwoViceCaptain).subscribe(res=>{
                            
                            this.clubTwoViceCaptain=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
                          this.playerService.getPlayer(this.match.clubOneKeper).subscribe(res=>{
                            
                            this.clubOneKeper=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
        
                          this.playerService.getPlayer(this.match.clubTwoKeper).subscribe(res=>{
                            
                            this.clubTwoKeper=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
        
                          this.playerService.getPlayer(this.match.manOfTheMatch).subscribe(res=>{
                            
                            this.manOfTheMatch=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
                          this.umpireService.getUmpire(this.match.umpireOneId).subscribe(res=>{
                           
                            this.umpireOne=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
        
                          this.umpireService.getUmpire(this.match.umpireTwoId).subscribe(res=>{
                           
                            this.umpireTwo=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
                          this.umpireService.getUmpire(this.match.umpireThreeId).subscribe(res=>{
                           
                            this.umpireThree=res;
                          },error=>{
                            console.log(error);
                            
                          })
        
                          this.matchService.getSelectedPlayerForMatch(this.match.matchId,this.match.clubOneId).subscribe(res=>{
                            console.log(res);
                            this.club1Players=res;
                          })
        
        
                          this.matchService.getSelectedPlayerForMatch(this.match.matchId,this.match.clubTwoId).subscribe(res=>{
                            console.log(res);
                            this.club2Players=res;
                          })
        
              })
            })

            // this.getBatmanTypeList();
            // this.getBallerTypeList();
            // this.getClubList();
          },
          (error) => {
            this.errorMessage = "INVALID CREDENTIALS.";
          }
        );


    
    
   }

  ngOnInit() {


  }

  mathcState(matchDate:Date,matchTime:String){

    


    return true;
  }

}
