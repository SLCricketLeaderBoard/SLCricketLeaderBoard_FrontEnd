import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerModel } from '../../../class-model/PlayerModel';
import { ClubModel } from '../../../class-model/ClubModel';
import { MatchModel } from '../../../class-model/MatchModel';
import { ClubService } from '../../../service/club/club.service';
import { MatchService } from '../../../service/match/match.service';
import { UserModel } from '../../../class-model/UserModel';
import { AngularFirestore } from "@angular/fire/firestore";
import { ConfirmedValidator } from '../../../validators/matchClubValidators.validator';


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

  @Input()match:MatchModel

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
  tosWiningTeam: ClubModel;

  inning: any;


  constructor(private matchService:MatchService,private clubService:ClubService,private afs: AngularFirestore,private formBuilder:FormBuilder) {

    this.userId=sessionStorage.getItem('userId');
    

    this.liveMatchDataForm = this.formBuilder.group(
      {
        striker: new FormControl(null, [Validators.required]),
        inning:new FormControl(null, [Validators.required,Validators.min(0)]),
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
      },{
        validators: [ConfirmedValidator('striker','nonStriker')]
      });
   }

  ngOnInit() {
    let matchDocId=this.match.matchId;

    this.afs.collection('liveMatchesRecords').doc(`${this.userId}`).collection('match').doc(`${matchDocId}`).set(this.match);
    this.afs.collection('liveMatches').doc(`${this.match.matchId}`).update({liveState:"active"});

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
    const inning: any = this.liveMatchDataForm.value["inning"];
    const runs : Number = this.liveMatchDataForm.value["runs"];
    const legBy : Number = this.liveMatchDataForm.value["legBy"];
    const wicket : Number = this.liveMatchDataForm.value["wicket"];
    const ballState : any = this.liveMatchDataForm.value["ballState"];
    const striker : any = this.liveMatchDataForm.value["striker"];
    const nonStriker : any = this.liveMatchDataForm.value["nonStriker"];
    const bowler : any = this.liveMatchDataForm.value["bowler"];
    let score =0;
    let numberofBalls=0;
    let numberOfWickets=0;
    let runrate =0;


    this.activeStrike=striker;
    this.activeNonStrike=nonStriker;
    this.activeBowler=bowler;

    const x =this.liveMatchDataForm.value["team"];
    console.log(x);
    
    if(x==this.clubOne.clubId){
      this.battingClub=this.clubOne;
      this.scoreClubOne = (+this.scoreClubOne) + (+runs);
      

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
        runrate= (+this.runrateClubOne);
        score =(+this.scoreClubOne);
        numberofBalls = (+this.ballsClubTwo);


    }else{

      this.scoreClubTwo = (+this.scoreClubTwo) + (+runs);
      

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
        runrate= (+this.runrateClubTwo);
        score =(+this.scoreClubTwo);
        numberofBalls = (+this.ballsClubOne);
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
      if(x==this.clubOne.clubId){
        this.wicketsClubOne = (+this.wicketsClubOne) + 1;
        numberOfWickets=(+this.wicketsClubOne);
       
        
      }else{
        this.wicketsClubTwo = (+this.wicketsClubTwo) + 1;
        numberOfWickets=(+this.wicketsClubTwo);
        
      }

      console.log("wicket Gone");
      this.activeNonStrike=null;
      this.activeStrike=null;
      document.getElementById('activeStriker').innerHTML=this.activeStrike;
      document.getElementById('activeNonStriker').innerHTML=this.activeNonStrike;     
      this.liveMatchDataForm.patchValue({striker:null,nonStriker:null});
    }

    runrate=(+score)/(+numberofBalls);

    this.afs.collection('liveMatchesRecords').doc(`${this.userId}`).collection('match').doc(`${this.match.matchId}`).collection('eachBaller').add(
      { inning:inning,
        battingClub:this.battingClub,
        fieldingClub:this.fieldingClub,
        runs: +runs,
        wicket:wicket,
        ballerState:ballState,
        striker:striker,
        nonStriker:nonStriker,
        bowler:bowler,
        score:score,
        numberofBalls:numberofBalls,
        runrate:runrate,
        numberOfWickets:numberOfWickets
      }
    )

    this.afs.collection('liveMatches').doc(`${this.match.matchId}`).set(
      { inning:inning,
        battingClub:this.battingClub,
        fieldingClub:this.fieldingClub,
        runs: +runs,
        wicket:wicket,
        ballerState:ballState,
        striker:striker,
        nonStriker:nonStriker,
        bowler:bowler,
        score:score,
        numberofBalls:numberofBalls,
        runrate:runrate,
        numberOfWickets:numberOfWickets
      }
    )
  }

  checkCheckBoxvalue(event){
    console.log(event);
    const x =this.liveMatchDataForm.value["team"];
    console.log(x);
    if(x==this.clubOne.clubId){
      this.battingClub=this.clubOne;
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
      if(this.inning===1){
        this.tosWiningTeam=this.clubOne;
      }
      
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

      if(this.inning===1){
        this.tosWiningTeam=this.clubTwo;
      }
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

  inningChange(event){
    const x = this.liveMatchDataForm.value["inning"];
    this.inning=x;
    document.getElementById('inning').innerHTML=x;
    if(x==1){
      let x=this.liveMatchDataForm.value["team"];
      if(x===this.clubOne.clubId){
        this.tosWiningTeam=this.clubOne;
      }else{
        this.tosWiningTeam=this.clubTwo;
      }
    }

  }

  setValues(){

    const wicketsFallen : any = this.liveMatchDataForm.value["wicketsFallen"];
    const ballsPlayed : any = this.liveMatchDataForm.value["ballsPlayed"];
    const teamScore : any = this.liveMatchDataForm.value["teamScore"];

    const runs : Number = this.liveMatchDataForm.value["runs"];
    
    const x =this.liveMatchDataForm.value["team"];
    console.log(x);
    

    if(x!=this.clubOne.clubId){
      this.battingClub=this.clubOne;
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

    let winTeamId=null;
    if(this.scoreClubOne>this.scoreClubTwo){
      winTeamId=this.clubOne.clubId;
    }else{
      winTeamId=this.clubTwo.clubId;
    }

    let tossWinTeam = this.tosWiningTeam.clubId;

    this.afs.collection('liveMatches').doc(`${this.userId}`).collection('match').doc(`${this.match.matchId}`).update(
      {
        clubOneMark:this.scoreClubOne,
        clubTwoMark:this.scoreClubTwo,
        clubOneWicket:this.wicketsClubOne,
        clubTwoWicket:this.wicketsClubTwo,
        clubOneOvers:this.ballsClubOne,
        clubTwoOvers:this.ballsClubTwo,
        winTeamId:winTeamId,
        tossWinTeam:tossWinTeam

      }
    )   
  }

  saveState(){

    let winTeamId=null;
    if(this.scoreClubOne>this.scoreClubTwo){
      winTeamId=this.clubOne.clubId;
    }else{
      winTeamId=this.clubTwo.clubId;
    }

    let tossWinTeam = this.tosWiningTeam.clubId;

    this.afs.collection('liveMatchesRecords').doc(`${this.userId}`).collection('match').doc(`${this.match.matchId}`).update(
      {
        winTeamId: winTeamId,
        tossWinTeam: tossWinTeam,
        clubOneMark:this.scoreClubOne,
        clubTwoMark:this.scoreClubTwo,
        clubOneWicket:this.wicketsClubOne,
        clubTwoWicket:this.wicketsClubTwo,
        clubOneOvers:this.ballsClubOne,
        clubTwoOvers:this.ballsClubTwo,
      }
    )  
  }


  setScore(){
    this.spe=!this.spe;
  }

  ngOnDestroy(){
    this.afs.collection('liveMatches').doc(`${this.match.matchId}`).update({liveState:"inactive"}); 
    
    console.log(this.scoreClubOne);
    console.log(this.scoreClubTwo);
    
    
    this.saveState(); 


  }

}
