import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { PlayerService } from '../../service/player/player.service';
import { PlayerModel } from '../../class-model/PlayerModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalMessage } from '../../shared/swal-message';
import { TournamentClubPlayerService } from '../../service/tournament-club-player/tournament-club-player.service';
import { PlayerWrapper } from '../../class-model/PlayerWrapper';
import { TournamentService } from '../../service/tournament/tournament.service';
import { TournamentModel } from '../../class-model/TournamentModel';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss']
})
export class PlayerSelectionComponent implements OnInit {

  isDataLoad = false;

  playerTypeList: String[] = ['Baller', 'All Rounder'];
  selectPlayerType: Number = 0;

  option: Number = -1; //1-->Register , 2-->Update
  clubId: Number = 0;
  tournementId: Number = 0;
  tournamentData: TournamentModel;
  isTournamentDataLoad: Boolean = false;
  errorMessage: string = "";
  swalMessage: SwalMessage = new SwalMessage();

  batmanList: PlayerModel[] = [];
  ballerList: PlayerModel[] = [];
  allRounderList: PlayerModel[] = [];

  previousBatmanList: PlayerModel[] = [];
  previousBallerList: PlayerModel[] = [];
  previousAllRounderList: PlayerModel[] = [];

  playerSelectionForm = this.fb.group({
    batmans: new FormControl('', [Validators.required, Validators.minLength(1)]),
    ballers: new FormControl('', [Validators.required, Validators.minLength(1)]),
    allRounders: new FormControl('', [Validators.required]),
  });

  get batmansField() {
    return this.playerSelectionForm.get('batmans');
  }

  get ballersField() {
    return this.playerSelectionForm.get('ballers');
  }

  get allRoundersField() {
    return this.playerSelectionForm.get('allRounders');
  }

  constructor(
    private fb: FormBuilder,
    private playerSerivce: PlayerService,
    private route: ActivatedRoute,
    private router: Router,
    private tournamentClubPlayerService: TournamentClubPlayerService,
    private tournamentSerive: TournamentService
  ) { }

  ngOnInit() {
    this.clubId = +sessionStorage.getItem("clubId");
    this.tournementId = +this.route.snapshot.params['tournementId'];
    this.option = this.route.snapshot.params['option'];

    this.getTournament();
    this.getClubPlayerList();
    if (this.option == 2) {
      this.getRegisteredClubPlayerList();
    }
  }

  getTournament() {
    this.tournamentSerive.getTournamentById(this.tournementId).subscribe(
      response => {
        this.tournamentData = response;
        this.isTournamentDataLoad = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  getClubPlayerList() {
    this.batmanList = [];
    this.ballerList = [];
    this.allRounderList = [];
    this.playerSerivce.getClubPlayerList(this.clubId, 1).subscribe(
      response => {
        response.forEach(player => {
          if (player.specialType == 1) {
            this.batmanList.push(player);
          } else if (player.specialType == 2) {
            this.ballerList.push(player);
          } else {
            this.allRounderList.push(player);
          }
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  getRegisteredClubPlayerList() {
    this.previousBatmanList = [];
    this.previousBallerList = [];
    this.previousAllRounderList = [];
    this.tournamentClubPlayerService.tournamentClubPlayerList(this.clubId, this.tournementId).subscribe(
      response => {
        response.forEach(player => {
          if (player.specialType == 1) {
            this.previousBatmanList.push(player);
          } else if (player.specialType == 2) {
            this.previousBallerList.push(player);
          } else {
            this.previousAllRounderList.push(player);
          }
        });
      },
      error => {
        console.log(error);
      }
    );
  }



  submit() {
    this.isDataLoad = true;
    let teamSize = this.batmansField.value.length + this.ballersField.value.length + this.allRoundersField.value.length;
    if (teamSize >= 6) {
      let selectPlayerList: PlayerModel[] = [];
      let playerWrapper: PlayerWrapper = new PlayerWrapper(selectPlayerList);

      this.batmansField.value.forEach(player => {
        selectPlayerList.push(player);
      });

      this.ballersField.value.forEach(player => {
        selectPlayerList.push(player);
      });

      this.allRoundersField.value.forEach(player => {
        selectPlayerList.push(player);
      });

      //Register club for the tournament and register players for the tournament
      if (this.option == 1) {
        this.tournamentClubPlayerService.tournamentClubPlayerRegister(this.clubId, this.tournementId, playerWrapper).subscribe(
          response => {
            this.isDataLoad = false;
            if (response == 1) {
              this.swalMessage.successMessage("Tournament Team Players Registration Successful");
            } else {
              this.swalMessage.warnningMessage("Tournament Team Players Already Registered");
            }
            this.router.navigate(['manager-tournament-list']);
          },
          error => {
            this.isDataLoad = false;
            console.log(error);
            this.swalMessage.notSuccessMessage("Tournament Team Players Registration Not Successful");
          }
        );
      }

      //Update data
      if (this.option == 2) {
        this.tournamentClubPlayerService.tournamentClubPlayerUpdate(this.clubId, this.tournementId, playerWrapper).subscribe(
          response => {
            if (response == 1) {
              this.swalMessage.successMessage("Tournament Team Players Update Successful");
              this.getClubPlayerList();
              this.getRegisteredClubPlayerList();
            }
            this.isDataLoad = false;
          },
          error => {
            this.swalMessage.successMessage("Tournament Team Players Update Not Successful");
            console.log(error);
          }
        );
      }


    } else {
      this.errorMessage = "Team Registration not successful.Please select at least 12 players for the team";
      this.isDataLoad = false;
    }
  }

  selectPlayerFunction() {
    console.log(this.selectPlayerType)
  }


  close() {
    this.errorMessage = "";
  }

}
