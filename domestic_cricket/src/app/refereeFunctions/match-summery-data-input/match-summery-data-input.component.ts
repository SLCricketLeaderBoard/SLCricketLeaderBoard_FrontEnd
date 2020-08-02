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
  message: any
  done: any


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
      tossWinTeam: new FormControl(null, Validators.required),
      // winTeam: new FormControl(null, [Validators.required]),
      manOfTheMatch: new FormControl(null, [Validators.required]),
    });



    this.currentDate = new Date();

    this.route.params.subscribe(res => {
      this.matchId = res['matchId'];
      this.matchService.getMatchById(this.matchId).subscribe(res => {
        console.log(res);
        this.match = res;



        this.clubService.getClubData(this.match.clubOneId).subscribe(res => {

          this.club01 = res;
        })

        this.clubService.getClubData(this.match.clubTwoId).subscribe(res => {

          this.club02 = res;
        })






        this.playerService.getPlayer(this.match.captainClubOne).subscribe(res => {

          this.captainClubOne = res;
        }, error => {
          console.log(error);

        })

        this.playerService.getPlayer(this.match.captainClubTwo).subscribe(res => {

          this.captainClubTwo = res;
        }, error => {
          console.log(error);

        })


        this.playerService.getPlayer(this.match.clubOneViceCaptain).subscribe(res => {

          this.clubOneViceCaptain = res;
        }, error => {
          console.log(error);

        })


        this.playerService.getPlayer(this.match.clubTwoViceCaptain).subscribe(res => {

          this.clubTwoViceCaptain = res;
        }, error => {
          console.log(error);

        })

        this.playerService.getPlayer(this.match.clubOneKeper).subscribe(res => {

          this.clubOneKeper = res;
        }, error => {
          console.log(error);

        })


        this.playerService.getPlayer(this.match.clubTwoKeper).subscribe(res => {

          this.clubTwoKeper = res;
        }, error => {
          console.log(error);

        })



        this.umpireService.getUmpire(this.match.umpireOneId).subscribe(res => {

          this.umpireOne = res;
        }, error => {
          console.log(error);

        })


        this.umpireService.getUmpire(this.match.umpireTwoId).subscribe(res => {

          this.umpireTwo = res;
        }, error => {
          console.log(error);

        })

        this.umpireService.getUmpire(this.match.umpireThreeId).subscribe(res => {

          this.umpireThree = res;
        }, error => {
          console.log(error);

        })

        this.matchService.getSelectedPlayerForMatch(this.match.matchId, this.match.clubOneId).subscribe(res => {

          this.club1Players = res;
        })


        this.matchService.getSelectedPlayerForMatch(this.match.matchId, this.match.clubTwoId).subscribe(res => {

          this.club2Players = res;
        })

      })
    })

  }

  ngOnInit() {
  }

  updateSummery() {

    const club1Runs: Number = this.updateSummeryForm.value["club1Runs"];
    const club1Wickets: Number = this.updateSummeryForm.value["club1Wickets"];
    const club1FacedOvers: Number = this.updateSummeryForm.value["club1FacedOvers"];
    const club2Runs: Number = this.updateSummeryForm.value["club2Runs"];
    const club2Wickets: Number = this.updateSummeryForm.value["club2Wickets"];
    const club2FacedOvers: Number = this.updateSummeryForm.value["club2FacedOvers"];
    const tossWinTeam: Number = this.updateSummeryForm.value["tossWinTeam"];
    const winTeam: Number = this.updateSummeryForm.value["winTeam"];
    const manOfTheMatch: Number = this.updateSummeryForm.value["manOfTheMatch"];

    this.match.clubOneMark = +club1Runs;
    this.match.clubOneWicket = +club1Wickets;
    this.match.clubOneOvers = +club1FacedOvers;
    this.match.clubTwoMark = +club2Runs;
    this.match.clubTwoWicket = +club2Wickets;
    this.match.clubTwoOvers = +club2FacedOvers;

    this.match.tossWinTeam = +tossWinTeam;
    // this.match.winTeamId= +winTeam;
    this.match.manOfTheMatch = +manOfTheMatch;
    //this.match.state = +1;//This will change by backend

    if (club1Runs > club2Runs) {
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
