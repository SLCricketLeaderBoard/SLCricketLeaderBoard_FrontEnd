import { Component, OnInit } from '@angular/core';
import { ClubModel } from '../../../../class-model/ClubModel';
import { ClubService } from '../../../../service/club/club.service';
import { UmpireService } from '../../../../service/umpire/umpire.service';
import { UmpireModel } from '../../../../class-model/UmpireModel';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatchType } from '../../../../class-model/MatchType';
import { MatchService } from '../../../../service/match/match.service';
import { StadiumModel } from '../../../../class-model/StadiumModel';
import { StadiumService } from '../../../../service/stadium/stadium.service';
import { TournamentModel } from '../../../../class-model/TournamentModel';
import { TournamentService } from '../../../../service/tournament/tournament.service';
import { RefereeModel } from '../../../../class-model/RefereeModel';
import { RefereeService } from '../../../../service/referee/referee.service';
import { MatchModel } from '../../../../class-model/MatchModel';
import { ActivatedRoute } from '@angular/router';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { ConfirmedValidator } from '../../../../validators/matchClubValidators.validator';
import { UmpireValidator } from '../../../../validators/matchUmpireValidators.validator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  foods: Food[] = [
    { value: 'Dialog', viewValue: 'Dialog' },
    { value: 'Abans', viewValue: 'Abans' },
    { value: 'Pick me', viewValue: 'Pick me' }
  ];

  clubList: ClubModel[] = [];
  umpireList: UmpireModel[] = [];
  matchTypes: MatchType[] = [];
  stadiums: StadiumModel[] = [];
  tournament: TournamentModel
  referees: RefereeModel[] = [];
  tournamentId: Number;
  done:boolean =null;
  errorMessage = null;
  createMatch: FormGroup;

  startDate: Date = new Date();
  endDate: Date = new Date();
  showSpinner= false;
  endDateShow 

  constructor(private clubService: ClubService,
    private umpireService: UmpireService,
    private matchService: MatchService,
    private stadiumServices: StadiumService,
    private tournamentService: TournamentService,
    private refereeService: RefereeService,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
    private dialog: MatDialog) {

    this.createMatch = this.formBuilder.group({
      club01: new FormControl(null, [Validators.required]),
      club02: new FormControl(null, [Validators.required]),
      tournementRound: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null,),
      time: new FormControl(null, [Validators.required]),
      stadium: new FormControl(null, [Validators.required]),
      matchType: new FormControl(null, [Validators.required]),
      refree: new FormControl(null, [Validators.required]),
      umpire01: new FormControl(null, [Validators.required]),
      umpire02: new FormControl(null, [Validators.required]),
      umpire03: new FormControl(null, [Validators.required]),
      // sponser: new FormControl(null, [Validators.required])
    },{
      validators: [ConfirmedValidator('club01','club02'),
      UmpireValidator('umpire01','umpire02','umpire03'),
      ]
      
    })

    this.route.params.subscribe(res => {
      this.tournamentId = res['tournamentId'];
      this.tournamentService.getTournamentById(this.tournamentId).subscribe(res => {
        // console.log(res);
        this.tournament = res;

      })
    })


    this.clubService.getClubsForMatches(this.tournamentId).subscribe(
      response => {
        this.clubList = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    this.umpireService.getAvailableUmpires().subscribe(response => {
      this.umpireList = response
      // console.log(response);
    }, error => {
      console.log(error);
    });

    this.matchService.getMatchType().subscribe(response => {
      this.matchTypes = response;
      // console.log(response);
    }, error => {
      console.log(error);
    })


    this.stadiumServices.getAllStadiums().subscribe(response => {
      this.stadiums = response;
      // console.log(response);
    })

    this.refereeService.getAvailableReferees().subscribe(response => {
      this.referees = response;
      // console.log(this.referees);

    })



  }

  ngOnInit() {
    // this.startDate= new Date();
    // this.endDate = new Date()

  }

  get f(){
    return this.createMatch.controls;
  }

  reset() {
    this.createMatch.reset();
    console.log("reset");
    this.errorMessage=null;
    this.done=null;
  }

  create() {
    const startDate: Date = this.createMatch.value['startDate'];
    let finishDate: Date = this.createMatch.value['startDate'];
    if(this.endDateShow){
      finishDate=this.createMatch.value['endDate'];
    }
    this.showSpinner=true;
    const matchId: Number = null;
    const club1Id: Number = this.createMatch.value['club01'];
    const club2Id: Number = this.createMatch.value['club02'];
    const captainClub1: Number = 0;
    const captainClub2: Number = 0;
    const club1Mark: Number = 0;
    const club2Mark: Number = 0;
    const club1Wicket: Number = 0;
    const club2Wicket: Number = 0;
    const tournementRound: number = this.createMatch.value['tournementRound'];
   
    const startTime: Timestamp<Time> = this.createMatch.value['time'];
    const winTeamId: Number = 0;
    const sponser: String = "Dialog"
    const matchTypeId: MatchType = this.createMatch.value['matchType'];
    const tournamentId: TournamentModel = this.tournament;
    const stadiumId: StadiumModel = this.createMatch.value['stadium'];
    const refereeId: RefereeModel = this.createMatch.value['refree'];
    const umpire1Id: Number = this.createMatch.value['umpire01'];
    const umpire2Id: Number = this.createMatch.value['umpire02'];
    const umpire3Id: Number = this.createMatch.value['umpire03'];
    const tossWinTeam: Number = 0;
    const clubOneViceCaptain: Number = 0;
    const clubTwoViceCaptain: Number = 0;
    const clubOneKeper: Number = 0;
    const clubTwoKeper: Number = 0; 
    const manOfTheMatch: Number =0;
    const clubOneOvers: Number = 0;
    const clubTwoOvers: Number = 0;
    const state : Number = 0;
    const testMatchId : Number =0; 




    var date = new Date(this.tournament.endDate);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    const tournamentEndDate = (year*10000)+(month*100)+day;
    const matchEndDate = finishDate.getFullYear()*10000+finishDate.getMonth()*100+finishDate.getDate();
    
console.log(tournamentEndDate +"tournament end date");
console.log(matchEndDate+" mathc end date");




    if(startDate>finishDate){
      alert("Please Double check your Start and End Dates of the match");
        
    }else if(tournamentEndDate < matchEndDate){
      alert("Please Double check your organizing dates. There is a mismatch with the tournament organizing dates")
    }else{  
        const match: MatchModel = new MatchModel(
          matchId,
          club1Id,
          club2Id,
          captainClub1,
          captainClub2,
          club1Mark,
          club2Mark,
          club1Wicket,
          club2Wicket,
          tournementRound,
          startDate,
          finishDate,
          startTime,
          winTeamId,
          sponser,
          matchTypeId,
          tournamentId,
          stadiumId,
          refereeId,
          umpire1Id,
          umpire2Id,
          umpire3Id,
          tossWinTeam,
          clubOneViceCaptain,
          clubTwoViceCaptain,
          clubOneKeper,
          clubTwoKeper,
          manOfTheMatch,
          clubOneOvers,
          clubTwoOvers,
          state,
          testMatchId
        );

        console.log(match);
        
        
         let x = this.matchService.createMatch(match).subscribe(response=>{
           this.matchService.createMatchInfirebase(response).then(res=>{
             console.log(res);
             this.showSpinner=false;
              this.done=true;
              setTimeout(()=>{
                this.createMatch.reset();
                this.createMatch.clearValidators();
              },1000)
           }
            
           ).catch(error=>{
            this.showSpinner=false;
            setTimeout(()=>{
              this.createMatch.reset();
              this.createMatch.clearAsyncValidators();
            },2000)

             this.errorMessage=error.message
             this.done=false;
           })

           this.showSpinner=false;
         },error=>{
          this.showSpinner=false;
          setTimeout(()=>{
            this.createMatch.reset();
            this.createMatch.clearAsyncValidators();
          },1000)

           console.log(error.message);
           this.errorMessage=error.message
           this.done= false; 
         }) 

      }


      
      
    }
      
      checkCheckBoxvalue(){
        const x = this.createMatch.value['matchType'];
       if(x.matchTypeId==2){
         this.endDateShow=true;
       }else{
        this.endDateShow=false;
       }
 
      }

      setEndDate(){
        console.log("end date");
        
        if(!this.endDateShow){
          this.createMatch.setValue({
            endDate:this.createMatch.value['startDate']
          });
        }  
      }




}
