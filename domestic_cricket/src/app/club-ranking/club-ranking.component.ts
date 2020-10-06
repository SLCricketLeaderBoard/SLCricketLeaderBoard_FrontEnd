import { Component, OnInit } from '@angular/core';
import { GUEST_USER_EMAIL, GUEST_USER_PASSWORD } from '../app.constants';
import { UserAuthenticationServiceService } from '../service/user/user-authentication-service.service';
import { ClubRankingModel } from '../class-model/ClubRankingModel';
import { ClubRankingService } from '../service/club-ranking/club-ranking.service';
import { ClubModel } from '../class-model/ClubModel';
import { ClubService } from '../service/club/club.service';
import { PlayerModel } from '../class-model/PlayerModel';
import { PlayerService } from '../service/player/player.service';

@Component({
  selector: 'app-club-ranking',
  templateUrl: './club-ranking.component.html',
  styleUrls: ['./club-ranking.component.scss']
})
export class ClubRankingComponent implements OnInit {

  clubRankingList: ClubRankingModel[] = [];
  orderList: String[] = ['ODI', 'Test', 'T20'];
  selectOrder: Number = 0;

  isClubSelect: Boolean = false;
  selectedClubId: Number = 0;
  clubData: ClubModel;
  clubPlayerList: PlayerModel[] = [];

  constructor(
    private userAuthenticationService: UserAuthenticationServiceService,
    private clubRankingService: ClubRankingService,
    private clubService: ClubService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.guestUserAuthenticated();
  }

  guestUserAuthenticated() {
    let email: string = GUEST_USER_EMAIL;
    let password: string = GUEST_USER_PASSWORD;
    this.userAuthenticationService
      .executeJWTAuthenticationService(
        email,
        password
      )
      .subscribe(
        (response) => {
          this.getClubRankingData(0);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getClubRankingData(type: Number) {
    this.selectOrder = type;
    this.clubRankingService.getClubRanking(+this.selectOrder + 1).subscribe(
      response => {
        console.log(response);
        this.clubRankingList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  getClubData(clubId: Number) {
    this.selectedClubId = clubId;
    this.isClubSelect = true;
    this.clubService.getClubData(clubId).subscribe(
      response => {
        this.clubData = response;
        this.getClubPlayers();
      }
    );
  }

  getClubPlayers() {
    this.playerService.getClubPlayerList(this.selectedClubId, 1).subscribe(
      response => {
        //sort the player list according to type
        this.clubPlayerList = response;
        let curId;
        for (let pos = 1; pos < this.clubPlayerList.length; pos++) {
          curId = pos;
          while (curId > 0 && (this.clubPlayerList[curId].specialType < this.clubPlayerList[curId - 1].specialType)) {
            //swap data
            let tem = this.clubPlayerList[curId];
            this.clubPlayerList[curId] = this.clubPlayerList[curId - 1];
            this.clubPlayerList[curId - 1] = tem;

            curId = curId - 1;
          }
        }

      },
      error => {
        console.log(error);
      }
    );
  }

}
