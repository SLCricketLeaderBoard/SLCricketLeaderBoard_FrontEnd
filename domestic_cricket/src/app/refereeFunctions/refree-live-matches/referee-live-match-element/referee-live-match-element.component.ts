import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerModel } from '../../../class-model/PlayerModel';
import { ClubModel } from '../../../class-model/ClubModel';
import { MatchModel } from '../../../class-model/MatchModel';
import { ClubService } from '../../../service/club/club.service';
import { MatchService } from '../../../service/match/match.service';


interface ballState {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-referee-live-match-element',
  templateUrl: './referee-live-match-element.component.html',
  styleUrls: ['./referee-live-match-element.component.scss']
})
export class RefereeLiveMatchElementComponent implements OnInit {

  @Input() match :MatchModel

  balls: ballState[] = [
    
    { value: 'No', viewValue: 'No ball' },
    { value: 'Wide', viewValue: 'Wide ball' },
    { value: 'Bounser', viewValue: 'Bounser ball' },
    
  ];



  userId:String
  liveMatchDataForm:FormGroup
  clubOne:ClubModel;
  clubTwo:ClubModel;

  clubs: ClubModel[] = [];
  clubOnePlayerList:PlayerModel[] =[];
  clubTwoPlayerList:PlayerModel[] =[];

  battingPlayers:PlayerModel[];
  feildingPlayers:PlayerModel[];

  battingClub: ClubModel;
  fieldingClub: ClubModel;

  strike: PlayerModel;
  nonStrike: PlayerModel;
  bowler: PlayerModel;

  constructor(private matchService:MatchService,private clubService:ClubService) {


    this.liveMatchDataForm = new FormGroup(
      {
        striker: new FormControl(null,),
        nonStriker: new FormControl(null,),
        bowler :new FormControl(null,),
        team: new FormControl(null, [Validators.required]),
        runs: new FormControl(null, [Validators.required]),
        legBy: new FormControl(null,[Validators.required]),
        wicket: new FormControl(null, [Validators.required]),
        ballState: new FormControl(null, [Validators.required]),

      });


   }

  ngOnInit() {
    console.log(this.match);
    this.clubService.getClubData(this.match.clubOneId).subscribe(res=>{
      this.clubOne=res;
      this.clubs.push(res);
    })
    this.clubService.getClubData(this.match.clubTwoId).subscribe(res=>{
      this.clubTwo=res;
      this.clubs.push(res);
    })

    this.matchService.getSelectedPlayerForMatch(this.match.matchId,this.match.clubOneId).subscribe(res=>{
      this.clubOnePlayerList=res;
      console.log(res);      
    })

    this.matchService.getSelectedPlayerForMatch(this.match.matchId,this.match.clubTwoId).subscribe(res=>{
      this.clubTwoPlayerList=res;
      console.log(res);
    })
  }


  legBy(){
    console.log("legby");
  }

  addData(){
    const runs : Number = this.liveMatchDataForm.value["runs"];
    const legBy : Number = this.liveMatchDataForm.value["legBy"];
    const wicket : Number = this.liveMatchDataForm.value["wicket"];
    const ballState : any = this.liveMatchDataForm.value["ballState"];
    const striker : any = this.liveMatchDataForm.value["striker"];
    const nonStriker : any = this.liveMatchDataForm.value["nonStriker"];
    const bowler : any = this.liveMatchDataForm.value["bowler"];

    console.log(runs);
    console.log(legBy);
    console.log(wicket);
    console.log(striker);
  }

  checkCheckBoxvalue(event){
    console.log(event);
    const x =this.liveMatchDataForm.value["team"];
    console.log(x);
    this.battingClub=x;
    if(x==this.clubOne.clubId){
      this.fieldingClub=this.clubTwo;
      console.log(this.fieldingClub.clubId);
      document.getElementById('fieldingClub').innerHTML=this.fieldingClub.clubName.toString();
      document.getElementById('livefieldingTeamName').innerHTML=this.fieldingClub.clubName.toString();
      document.getElementById('liveBattingTeamName').innerHTML=this.clubOne.clubName.toString();
      this.battingPlayers=this.clubOnePlayerList;
      this.feildingPlayers=this.clubTwoPlayerList;
      
    }else{
      this.fieldingClub=this.clubOne;
      document.getElementById('fieldingClub').innerHTML=this.fieldingClub.clubName.toString();
      document.getElementById('livefieldingTeamName').innerHTML=this.fieldingClub.clubName.toString();
      document.getElementById('liveBattingTeamName').innerHTML=this.clubTwo.clubName.toString();
      this.battingPlayers=this.clubTwoPlayerList;
      this.feildingPlayers=this.clubOnePlayerList;
    }
  }
  



}
