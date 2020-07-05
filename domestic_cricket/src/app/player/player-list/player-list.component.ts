import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../service/player/player.service';
import { PlayerModel } from '../../class-model/PlayerModel';
import { UserServiceService } from '../../service/user/user-service.service';
import { SwalMessage } from '../../shared/swal-message';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  playerList: PlayerModel[] = [];
  playerRequestList: PlayerModel[] = [];
  swalMessage: SwalMessage = new SwalMessage();
  errorMessage: String = "";

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.getClubPlayerList();
    this.getPlayerRequest();
  }

  playerRegister(playerId: Number) {
    this.router.navigate(['player-add', playerId]);
  }

  //Active users
  getClubPlayerList() {
    let clubId: Number = +sessionStorage.getItem('clubId');
    this.playerService.getClubPlayerList(clubId, 1).subscribe(
      response => {
        this.playerList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Not activated players
  getPlayerRequest() {
    let clubId: Number = +sessionStorage.getItem('clubId');
    this.playerService.getClubPlayerList(clubId, 0).subscribe(
      response => {
        this.playerRequestList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  deactivateAccount(playerId: Number, userName: String) {
    this.playerService.playerAccountDeactivate(playerId).subscribe(
      response => {
        if (response == 0) {
          this.swalMessage.notSuccessMessage(userName + "'s account not deactivated.");
          this.errorMessage = "Player already registered current tournament or upcoming tournament.Cannot deativate player's account";
        }
        if (response == 1) {
          this.swalMessage.successMessage(userName + "'s account deactivated.");
          this.getClubPlayerList();
          this.getPlayerRequest();
        }
      },
      error => {
        console.log(error);
        this.swalMessage.notSuccessMessage(userName + "'s account not deactivated.")
      }
    );
  }

  playerUpdate(playerId: Number) {
    this.router.navigate(['player-add', playerId]);
  }

  close() {
    this.errorMessage = "";
  }

}
