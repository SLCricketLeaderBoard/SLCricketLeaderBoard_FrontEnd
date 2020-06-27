import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { PlayerService } from '../../service/player/player.service';
import { PlayerModel } from '../../class-model/PlayerModel';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { ActivatedRoute } from '@angular/router';
import { TournamentClubService } from '../../service/tournament-club/tournament-club.service';
import { TournamentClubModel } from '../../class-model/TournamentClubModel';
import { SwalMessage } from '../../shared/swal-message';
import { TournamentClubPlayerService } from '../../service/tournament-club-player/tournament-club-player.service';
import { PlayerWrapper } from '../../class-model/PlayerWrapper';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss']
})
export class PlayerSelectionComponent implements OnInit {

  clubId: Number = 0;
  tournementId: Number = 0;
  errorMessage: string = "";
  swalMessage: SwalMessage = new SwalMessage();

  batmanList: PlayerModel[] = [];
  ballerList: PlayerModel[] = [];
  allRounderList: PlayerModel[] = [];

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
    private tournamentClubPlayerService: TournamentClubPlayerService
  ) { }

  ngOnInit() {
    this.clubId = +sessionStorage.getItem("clubId");
    this.tournementId = this.route.snapshot.params['tournementId'];
    this.getClubPlayerList();
  }

  getClubPlayerList() {
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

  submit() {
    let teamSize = this.batmansField.value.length + this.ballersField.value.length + this.allRoundersField.value.length;
    if (teamSize >= 3) {
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
      this.tournamentClubPlayerService.tournamentClubPlayerRegister(this.clubId, this.tournementId, playerWrapper).subscribe(
        response => {
          this.swalMessage.successMessage("Tournament Registration Successful");
        },
        error => {
          console.log(error);
          this.swalMessage.notSuccessMessage("Tournament Registration Not Successful")
        }
      );


    } else {
      this.errorMessage = "Team Registration not successful.Please select at least 12 players for the team";
    }
    console.log(teamSize)
  }


  close() {
    this.errorMessage = "";
  }

}
