import { Component, OnInit } from '@angular/core';
import { GUEST_USER_EMAIL, GUEST_USER_PASSWORD } from '../app.constants';
import { UserAuthenticationServiceService } from '../service/user/user-authentication-service.service';
import { ClubRankingModel } from '../class-model/ClubRankingModel';
import { ClubRankingService } from '../service/club-ranking/club-ranking.service';

@Component({
  selector: 'app-club-ranking',
  templateUrl: './club-ranking.component.html',
  styleUrls: ['./club-ranking.component.scss']
})
export class ClubRankingComponent implements OnInit {

  clubRankingList: ClubRankingModel[] = [];
  orderList: String[] = ['ODI', 'Test', 'T20'];
  selectOrder: Number = 0;

  constructor(
    private userAuthenticationService: UserAuthenticationServiceService,
    private clubRankingService: ClubRankingService
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

}
