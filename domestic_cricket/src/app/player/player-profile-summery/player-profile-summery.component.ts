import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../service/player/player.service';
import { PlayerModel } from '../../class-model/PlayerModel';
import { BatmanScoreModel } from '../../class-model/BatmanScoreModel';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';
import { FieldingScoreModel } from '../../class-model/FieldingScoreModel';
import { PlayerMatchRecordModel } from '../../class-model/PlayerMatchRecordModel';
import { PlayerMatchDataModel } from '../../class-model/PlayerMatchDataModel';
import { GUEST_USER_EMAIL, GUEST_USER_PASSWORD } from '../../app.constants';
import { UserAuthenticationServiceService } from '../../service/user/user-authentication-service.service';

@Component({
  selector: 'app-player-profile-summery',
  templateUrl: './player-profile-summery.component.html',
  styleUrls: ['./player-profile-summery.component.scss']
})
export class PlayerProfileSummeryComponent implements OnInit {

  playerId: Number;
  player: PlayerModel;
  rank
  errorMessage

  playerMatchDataBatmen: PlayerMatchDataModel[] = [];
  playerMatchDataBaller: PlayerMatchDataModel[] = [];

  asBallers: BallerScoreModel;
  asBatman: BatmanScoreModel;
  asAllRounders: FieldingScoreModel;
  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService,  private userAuthenticationService: UserAuthenticationServiceService) {
    this.route.params.subscribe(res => {
      this.playerId = res['userId'];
      console.log(this.playerId);
    })

    this.rank = +this.route.snapshot.queryParamMap.get('rank');
    console.log(this.rank);

  }

  ngOnInit() {
    this.guestUserAuthenticated();
    

    this.playerService.getPlayerForDetails(this.playerId).subscribe(res => {
      this.player = res;
      // console.log(res);
    })

    this.playerService.getPlayerBattingDetails(this.playerId).subscribe(res => {
      this.asBatman = res;
      console.log(res);
    })

    this.playerService.getPlayerBowllingDetails(this.playerId).subscribe(res => {
      this.asBallers = res;
      console.log(res);
    })

    this.playerService.getPlayerFieldingDetails(this.playerId).subscribe(res => {
      this.asAllRounders = res;
      console.log(res);
    })

  }

  getPlayerMatchData(playerType: Number) {
    console.log(this.playerId)
    this.playerService.getPlayerMatchData(playerType, this.playerId).subscribe(
      response => {
        console.log(response);
        if (playerType == 1) {
          this.playerMatchDataBatmen = response;
        } else if (playerType == 2) {
          this.playerMatchDataBaller = response;
        }
      },
      error => {
        console.log(error);
      }
    );
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
          console.log("Success request for guest user")
          this.getPlayerMatchData(1);
          this.getPlayerMatchData(2);
        },
        (error) => {
          this.errorMessage = "INVALID CREDENTIALS.";
        }
      );
  }



}
