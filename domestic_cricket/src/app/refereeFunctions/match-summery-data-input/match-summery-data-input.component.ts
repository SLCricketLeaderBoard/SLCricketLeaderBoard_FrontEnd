import { Component, OnInit } from '@angular/core';
import { MatchModel } from '../../class-model/MatchModel';
import { ClubModel } from '../../class-model/ClubModel';
import { PlayerModel } from '../../class-model/PlayerModel';
import { UmpireModel } from '../../class-model/UmpireModel';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../../service/match/match.service';
import { ClubService } from '../../service/club/club.service';
import { PlayerService } from '../../service/player/player.service';
import { UmpireService } from '../../service/umpire/umpire.service';
import { RefereeService } from '../../service/referee/referee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-match-summery-data-input',
  templateUrl: './match-summery-data-input.component.html',
  styleUrls: ['./match-summery-data-input.component.scss']
})
export class MatchSummeryDataInputComponent implements OnInit {

  match: MatchModel;
  matchId: Number;
  club01: ClubModel;
  club02: ClubModel;
  captainClubOne: PlayerModel
  captainClubTwo: PlayerModel
  winTeamId: ClubModel  
  umpireOne: UmpireModel
  umpireTwo: UmpireModel
  umpireThree: UmpireModel
  tossWinTeam: ClubModel
  clubOneViceCaptain: PlayerModel
  clubTwoViceCaptain: PlayerModel
  clubOneKeper: PlayerModel
  clubTwoKeper: PlayerModel
  manOfTheMatch: PlayerModel
  currentDate: Date
  state: any


  club1Players: PlayerModel[]
  club2Players: PlayerModel[]


  updateSummeryForm: FormGroup;
  message:any
  done:any
  showInning=false;
  mathcType



  constructor(private route: ActivatedRoute, private matchService: MatchService, private clubService: ClubService, private playerService: PlayerService, private umpireService: UmpireService, private refreeService: RefereeService) {

    this.updateSummeryForm = new FormGroup({
      club1Runs: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      club1Wickets: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      club1FacedOvers: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      club2Runs: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      club2Wickets: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      club2FacedOvers: new FormControl(null, [
        Validators.required,
        Validators.min(0),

      ]),

      club1RunsSecond: new FormControl(null),
      club1WicketsSecond: new FormControl(null),
      club1FacedOversSecond: new FormControl(null),
      club2RunsSecond: new FormControl(null),
      club2WicketsSecond: new FormControl(null),
      club2FacedOversSecond: new FormControl(null),

      tossWinTeam: new FormControl(null, Validators.required),
      // winTeam: new FormControl(null, [Validators.required]),
      manOfTheMatch: new FormControl(null, [Validators.required]),
      inning : new FormControl(null, [Validators.required]),
    });



    this.currentDate = new Date();

    this.route.params.subscribe(res => {
      this.matchId = res['matchId'];
      console.log(this.matchId);
      
      this.matchService.getMatchById(this.matchId).subscribe(res=>{
        console.log(res);
        if(res.matchTypeId.matchTypeId==2){
          this.showInning=true;
        }
        this.match=res;

        this.updateSummeryForm.setValue({
          club1Runs: null,
          club1Wickets: null,
          club1FacedOvers: null,
          club2Runs: null,
          club2Wickets: null,
          club2FacedOvers: null,
          club1RunsSecond: null,
          club1WicketsSecond: null,
          club1FacedOversSecond: null,
          club2RunsSecond: null,
          club2WicketsSecond: null,
          club2FacedOversSecond: null,
          tossWinTeam: null,
          manOfTheMatch:null,
          inning:0          
        });
   
                  this.clubService.getClubData(this.match.clubOneId).subscribe(res=>{
                    
                    this.club01=res;
                  })
                  
                  this.clubService.getClubData(this.match.clubTwoId).subscribe(res=>{
                   
                    this.club02=res;
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
                  
                    this.club1Players=res;
                  })


                  this.matchService.getSelectedPlayerForMatch(this.match.matchId,this.match.clubTwoId).subscribe(res=>{
                    
                    this.club2Players=res;
                  })

      })
    })

  }

  ngOnInit() {

 

  }

  updateSummery(){

    const club1Runs : Number = this.updateSummeryForm.value["club1Runs"];
    const club1Wickets : Number = this.updateSummeryForm.value["club1Wickets"];
    const club1FacedOvers : Number = this.updateSummeryForm.value["club1FacedOvers"];
    const club2Runs : Number = this.updateSummeryForm.value["club2Runs"];
    const club2Wickets : Number = this.updateSummeryForm.value["club2Wickets"];
    const club2FacedOvers : Number = this.updateSummeryForm.value["club2FacedOvers"];
    const tossWinTeam : Number = this.updateSummeryForm.value["tossWinTeam"];
    const winTeam : Number = this.updateSummeryForm.value["winTeam"];
    const manOfTheMatch : Number = this.updateSummeryForm.value["manOfTheMatch"];
    const inning : Number = this.updateSummeryForm.value["inning"];
    const club1RunsSecond : Number = this.updateSummeryForm.value["club1RunsSecond"];
    const club1WicketsSecond : Number = this.updateSummeryForm.value["club1WicketsSecond"];
    const club1FacedOversSecond : Number = this.updateSummeryForm.value["club1FacedOversSecond"];
    const club2RunsSecond : Number = this.updateSummeryForm.value["club2RunsSecond"];
    const club2WicketsSecond : Number = this.updateSummeryForm.value["club2WicketsSecond"];
    const club2FacedOversSecond : Number = this.updateSummeryForm.value["club2FacedOversSecond"];


      if(this.showInning){
        console.log("log");
        this.match.clubOneMark = +club1RunsSecond +(+club1Runs);
        this.match.clubTwoMark = +club2RunsSecond +(+club2Runs);
        this.match.clubOneWicket = +club1WicketsSecond +(+club1Wickets);
        this.match.clubTwoWicket = +club2WicketsSecond +(+club2Wickets);
        this.match.clubOneOvers = +club1FacedOversSecond +(+club1FacedOvers);
        this.match.clubTwoOvers = +club2FacedOversSecond +(+club2FacedOvers);      
      }else{  
        console.log("udual false insshowing");
        this.match.clubOneMark= +club1Runs;
        this.match.clubOneWicket= +club1Wickets;
        this.match.clubOneOvers= +club1FacedOvers;
        this.match.clubTwoMark= +club2Runs;
        this.match.clubTwoWicket= +club2Wickets;
        this.match.clubTwoOvers= +club2FacedOvers;

      }

      //   if(inning==0){
      // this.match.testMatchId=0;
      //   }else if(inning==1){
      //     this.match.testMatchId=this.match.matchId;
      //   }else if(inning==2){
      //     this.match.testMatchId=this.match.matchId;
      //     this.match.matchId=null;
      //   }else{
      //     this.match.testMatchId=0;
      //   }
     
      
      this.match.tossWinTeam= +tossWinTeam;
      // this.match.winTeamId= +winTeam;
      this.match.manOfTheMatch = +manOfTheMatch;
      //this.match.state = +1;//This will change by backend
  
      if ( this.match.clubOneMark > this.match.clubTwoMark) {
        this.match.winTeamId = this.match.clubOneId;
      } else {
        this.match.winTeamId = this.match.clubTwoId;
      }
  
      console.log(this.match);
  
      this.matchService.updateMatch(this.match).subscribe(res => {
  
        this.done = true;
        this.match.state = 1;//Completed update
      }, error => {
        console.log(error);
        this.message = error.message;
      })

  


  

 

  }

  reset() {
    this.updateSummeryForm.reset();
    this.done = false;
    this.message = null;
  }

}
