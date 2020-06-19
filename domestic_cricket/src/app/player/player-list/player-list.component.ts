import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../service/player/player.service';
import { PlayerModel } from '../../class-model/PlayerModel';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  playerList: PlayerModel[] = [];

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getClubPlayerList();
  }

  playerRegister() {
    this.router.navigate(['player-add']);
  }

  getClubPlayerList() {
    let clubId: Number = +sessionStorage.getItem('clubId');
    this.playerService.getClubPlayerList(clubId).subscribe(
      response => {
        this.playerList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
