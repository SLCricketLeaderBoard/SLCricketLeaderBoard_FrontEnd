import { Component, OnInit } from '@angular/core';
import { MatchModel } from '../../class-model/MatchModel';
import { MatchService } from '../../service/match/match.service';
import { ClubService } from '../../service/club/club.service';
import { ClubModel } from '../../class-model/ClubModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-match-list',
  templateUrl: './manager-match-list.component.html',
  styleUrls: ['./manager-match-list.component.scss']
})
export class ManagerMatchListComponent implements OnInit {

  clubId: Number = -1;
  clubData: ClubModel;
  playedMatchList: MatchModel[] = [];
  upComingMatchList: MatchModel[] = [];
  winTeamNamesList: String[] = [];

  constructor(
    private matchService: MatchService,
    private clubService: ClubService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clubId = +sessionStorage.getItem("clubId");
    this.getClubData();
    this.getPlayedMatchList();
    this.getUpcomingMatchList();
  }

  getPlayedMatchList() {
    this.matchService.getPlayedMatchList(this.clubId).subscribe(
      response => {
        this.playedMatchList = response;
        this.winTeamNames();
      },
      error => {
        console.log(error);
      }
    );
  }

  getUpcomingMatchList() {
    this.matchService.getUpcomingMatchList(this.clubId).subscribe(
      response => {
        this.upComingMatchList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  getClubData() {
    this.clubService.getClubData(this.clubId).subscribe(
      response => {
        this.clubData = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  winTeamNames() {
    let i = 0;
    let index: Number[] = [];
    let winClubNames: String[] = [];

    this.playedMatchList.forEach(match => {
      if (match.winTeamId == this.clubId) {
        this.winTeamNamesList.push(this.clubData.clubName);
      } else if (match.winTeamId == 0) {
        this.winTeamNamesList.push("Grow")
      } else {
        index.push(i);
        this.winTeamNamesList.push("");
        this.clubService.getClubData(match.winTeamId).subscribe(
          response => {
            winClubNames.push(response.clubName);
          },
          error => {
            console.log(error);
          }
        );
      }
      i++;
    });

    // i = 0;
    // console.log(index)
    // console.log(this.winTeamNamesList)
    // index.forEach(element => {
    //   this.winTeamNamesList[+element] = winClubNames[i];
    //   i++;
    // });
    // console.log(this.winTeamNamesList)
    this.delay(3000, 0, index, winClubNames);
  }

  async delay(ms: number, i, index, winClubNames) {
    await new Promise(resolve => setTimeout(() => resolve(), ms))
      .then(() =>
        index.forEach(element => {
          this.winTeamNamesList[+element] = winClubNames[i];
          i++;
          console.log(this.winTeamNamesList)
        })
      );
  }

  updateCaptains(matchId: Number, type: Number) {
    this.router.navigate(['captain-change', matchId, this.clubId, type]);
  }

  matchMoreDetails(matchId: Number) {
    this.router.navigate(['match-more-details', matchId]);
  }



}
