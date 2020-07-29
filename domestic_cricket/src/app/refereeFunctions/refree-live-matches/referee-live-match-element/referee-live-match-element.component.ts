import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerModel } from '../../../class-model/PlayerModel';
import { ClubModel } from '../../../class-model/ClubModel';
import { MatchModel } from '../../../class-model/MatchModel';
import { ClubService } from '../../../service/club/club.service';
import { MatchService } from '../../../service/match/match.service';
import { UserModel } from '../../../class-model/UserModel';


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
    { value: 'Live',viewValue:'Live ball'},
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

  battingPlayers:PlayerModel[] = [];
  feildingPlayers:PlayerModel[]=[];

  battingClub: ClubModel;
  fieldingClub: ClubModel;

  spe = false;


  activeStrike: any;
  activeNonStrike: any;
  activeBowler: any;
  wicketsClubOne: Number =0;
  scoreClubOne: Number =0;
  ballsClubOne: Number =0;
  oversClubOne: Number=0;
  runrateClubOne : Number=0;

  wicketsClubTwo: Number =0;
  scoreClubTwo: Number=0;
  ballsClubTwo: Number =0;
  oversClubTwo: Number=0;
  runrateClubTwo : Number = 0;

  constructor(private matchService:MatchService,private clubService:ClubService) {


    this.liveMatchDataForm = new FormGroup(
      {
        striker: new FormControl(null, [Validators.required]),
        inning:new FormControl(null, [Validators.required]),
        nonStriker: new FormControl(null, [Validators.required]),
        bowler :new FormControl(null,[Validators.required]),
        team: new FormControl(null, [Validators.required]),
        runs: new FormControl(null, [Validators.required]),
        legBy: new FormControl(null,[]),
        wicket: new FormControl(null, []),
        ballState: new FormControl(null, [Validators.required]),
        ballsPlayed: new FormControl(null, [Validators.min(0)]),
        teamScore: new FormControl(null, [Validators.min(0)]),
        wicketsFallen: new FormControl(null, [Validators.min(0),Validators.max(10)]),
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
      res.forEach(element=>{
        this.clubOnePlayerList.push(element);
      })
      console.log(res);      
    })

    this.matchService.getSelectedPlayerForMatch(this.match.matchId,this.match.clubTwoId).subscribe(res=>{
      res.forEach(element=>{
        this.clubTwoPlayerList.push(element);
      })
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
    const ballsPlayed : any = this.liveMatchDataForm.value["ballsPlayed"];
    const teamScore : any = this.liveMatchDataForm.value["teamScore"];
    const wicketsFallen : any = this.liveMatchDataForm.value["wicketsFallen"];

    this.activeStrike=striker;
    this.activeNonStrike=nonStriker;
    this.activeBowler=bowler;

    const x =this.liveMatchDataForm.value["team"];
    console.log(x);
    this.battingClub=x;
    if(x==this.clubOne.clubId){
      this.scoreClubOne = (+this.scoreClubOne) + (+runs);
      this.wicketsClubOne = (+this.wicketsClubOne) + (+wicket);

      switch (ballState) {
        case "No":
             this.scoreClubOne = (+this.scoreClubOne) + 1;
          break;

          case "Wide":
             this.scoreClubOne = (+this.scoreClubOne) + 1;
          break;
        default:
          this.ballsClubTwo = (+this.ballsClubTwo)+1;
          break;
      }  
        this.runrateClubOne= (+this.scoreClubOne)/(+this.ballsClubTwo);
        this.oversClubTwo = Math.floor(((+this.ballsClubTwo)/6)); 

    }else{

      this.scoreClubTwo = (+this.scoreClubTwo) + (+runs);
      this.wicketsClubTwo = (+this.wicketsClubTwo) + (+wicket);

      switch (ballState) {
        case "No":
             this.scoreClubTwo = (+this.scoreClubTwo) + 1;
          break;

          case "Wide":
             this.scoreClubTwo = (+this.scoreClubTwo) + 1;
          break;
        default:
          this.ballsClubOne = (+this.ballsClubOne)+1;
          break;
      }  
        this.runrateClubTwo= (+this.scoreClubTwo)/(+this.ballsClubOne);
        this.oversClubOne = Math.floor(((+this.ballsClubOne)/6)); 

    }
    
    switch (+runs) {
      case 0:
        break;
 
     case 1:{
       const temp =this.activeStrike;
       this.activeStrike=this.activeNonStrike;
       this.activeNonStrike=temp;
       console.log("switched");
       break;
     }
     case 2:
       break;
 
     case 3:{
       const temp2 =this.activeStrike;
       this.activeStrike=this.activeNonStrike;
       this.activeNonStrike=temp2;
       console.log("switched");
       break;
     }
     case 4:
       break;
     case 6:
       break;

      default:
        break;
    }

    if(x==this.clubOne.clubId){
      if(((+this.ballsClubTwo)%6)==0){
        console.log("over change");
        const temp2 =this.activeStrike;
       this.activeStrike=this.activeNonStrike;
       this.activeNonStrike=temp2;
       this.activeBowler=null;
       this.liveMatchDataForm.patchValue({bowler:null});

      }
    }else{
      if(((+this.ballsClubOne)%6)==0){
        console.log("over change");
        const temp2 =this.activeStrike;
        this.activeStrike=this.activeNonStrike;
        this.activeNonStrike=temp2;
        this.activeBowler=null;
        this.liveMatchDataForm.patchValue({bowler:null});
      }
    }

    this.liveMatchDataForm.patchValue({striker:this.activeStrike,nonStriker:this.activeNonStrike});
    document.getElementById('activeStriker').innerHTML=this.activeStrike;
    document.getElementById('activeNonStriker').innerHTML=this.activeNonStrike;
    document.getElementById('activeBowler').innerHTML=this.activeBowler;

    if(wicket){
      console.log("wicket Gone");
      this.activeNonStrike=null;
      this.activeStrike=null;
      document.getElementById('activeStriker').innerHTML=this.activeStrike;
      document.getElementById('activeNonStriker').innerHTML=this.activeNonStrike;     
      this.liveMatchDataForm.patchValue({striker:null,nonStriker:null});
    }
    

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
      this.battingPlayers=[];
      this.clubOnePlayerList.forEach(element=>{
        this.battingPlayers.push(element);
      })



      this.feildingPlayers=this.clubTwoPlayerList;
      
    }else{
      this.fieldingClub=this.clubOne;
      document.getElementById('fieldingClub').innerHTML=this.fieldingClub.clubName.toString();
      document.getElementById('livefieldingTeamName').innerHTML=this.fieldingClub.clubName.toString();
      document.getElementById('liveBattingTeamName').innerHTML=this.clubTwo.clubName.toString();
      this.battingPlayers=[];
      this.clubTwoPlayerList.forEach(element=>{
        this.battingPlayers.push(element)
      })
      this.feildingPlayers=[];
      this.clubOnePlayerList.forEach(element=>{
        this.feildingPlayers.push(element)
      })
    }
  }
  

  changeStriker(event){

      console.log(event);
      const x = this.liveMatchDataForm.value["striker"];
   
      document.getElementById('activeStriker').innerHTML=x;
  }

  changeNonStriker(event){
    console.log(event);
    const x = this.liveMatchDataForm.value["nonStriker"];
    document.getElementById('activeNonStriker').innerHTML=x;
  }

  changeBowller(event){
    console.log(event);
    const x = this.liveMatchDataForm.value["bowler"];
    document.getElementById('activeBowler').innerHTML=x;
  }

  setValues(){

    const wicketsFallen : any = this.liveMatchDataForm.value["wicketsFallen"];
    const ballsPlayed : any = this.liveMatchDataForm.value["ballsPlayed"];
    const teamScore : any = this.liveMatchDataForm.value["teamScore"];

    const runs : Number = this.liveMatchDataForm.value["runs"];
    
    const x =this.liveMatchDataForm.value["team"];
    console.log(x);
    this.battingClub=x;

    if(x!=this.clubOne.clubId){
      this.ballsClubOne=ballsPlayed;
    }else{
      this.ballsClubTwo=ballsPlayed;
    }

    if(x==this.clubOne.clubId){
      this.scoreClubOne=teamScore;
      this.runrateClubOne= (+this.scoreClubOne)/(+this.ballsClubTwo);
      this.oversClubTwo = Math.floor(((+this.ballsClubTwo)/6)); 
    }else{
      this.scoreClubTwo=teamScore;
      this.runrateClubTwo= (+this.scoreClubTwo)/(+this.ballsClubOne);
      this.oversClubOne = Math.floor(((+this.ballsClubOne)/6)); 
    }

    if(x==this.clubOne.clubId){
      this.wicketsClubOne=wicketsFallen;
    }else{
      this.wicketsClubTwo=wicketsFallen;
    }


   
  }


  setScore(){
    this.spe=!this.spe;
  }

}
