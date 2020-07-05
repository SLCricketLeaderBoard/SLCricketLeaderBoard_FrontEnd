import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchModel } from '../../../class-model/MatchModel';
import { MatchService } from '../../../service/match/match.service';
import { UmpireService } from '../../../service/umpire/umpire.service';
import { PlayerService } from '../../../service/player/player.service';
import { ClubService } from '../../../service/club/club.service';

@Component({
  selector: 'app-more-details-match',
  templateUrl: './more-details-match.component.html',
  styleUrls: ['./more-details-match.component.scss']
})
export class MoreDetailsMatchComponent implements OnInit {

  matchData: MatchModel;
  umpireNameList: String[] = [];
  playerNamesList: String[] = [];
  clubNameList: String[] = [];
  winTeam: String[] = [];

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private umpireService: UmpireService,
    private playerService: PlayerService,
    private clubService: ClubService
  ) { }

  ngOnInit() {
    let matchId = this.route.snapshot.params['matchId'];
    this.getMatchData(matchId);
  }

  getMatchData(matchId: Number) {
    this.matchService.getMatchById(matchId).subscribe(
      response => {
        this.matchData = response;


        this.umpireNameList = [];
        this.getUmpires(this.matchData.umpireOneId);
        this.getUmpires(this.matchData.umpireTwoId);
        this.getUmpires(this.matchData.umpireThreeId);

        this.playerNamesList = [];
        this.getPlayerDetails(this.matchData.captainClubOne);
        this.getPlayerDetails(this.matchData.clubOneViceCaptain);
        this.getPlayerDetails(this.matchData.clubOneKeper);

        this.getPlayerDetails(this.matchData.captainClubTwo);
        this.getPlayerDetails(this.matchData.clubTwoViceCaptain);
        this.getPlayerDetails(this.matchData.clubTwoKeper);

        this.getClubNameList(this.matchData.clubOneId);
        this.getClubNameList(this.matchData.clubTwoId);

        this.getWinTeam(this.matchData.clubOneId, this.matchData.winTeamId);
      },
      error => {
        console.log(error);
      }
    );
  }

  getUmpires(umpireId: Number) {
    this.umpireService.getUmpire(umpireId).subscribe(
      response => {
        this.umpireNameList.push(response.userId.nameWithInitial);
      },
      error => {
        console.log(error);
      }
    );
  }

  getPlayerDetails(playerId: Number) {
    this.playerService.getPlayer(playerId).subscribe(
      response => {
        this.playerNamesList.push(response.userId.nameWithInitial);
      }
    );
  }

  getClubNameList(clubId: Number) {
    this.clubService.getClubData(clubId).subscribe(
      response => {
        this.clubNameList.push(response.clubName);
      }
    );
  }

  getWinTeam(clubIdOne, winTeamClubId) {
    this.winTeam.push('empty');
    this.winTeam.push('empty');

    if (winTeamClubId == 0) {
      this.winTeam[0] = "win";
      this.winTeam[1] = "win";
    }
    else if (clubIdOne == winTeamClubId) {
      this.winTeam[0] = "win";
    } else {
      this.winTeam[1] = "win";
    }
  }

}
