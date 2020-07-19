import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerModel } from '../../../class-model/PlayerModel';
import { TournamentClubCaptainService } from '../../../service/tournament-club-captain.service';
import { MatchService } from '../../../service/match/match.service';
import { MatchModel } from '../../../class-model/MatchModel';
import { TournamentClubCaptainModel } from '../../../class-model/TournamentClubCaptainModel';

@Component({
  selector: 'app-captain-change',
  templateUrl: './captain-change.component.html',
  styleUrls: ['./captain-change.component.scss']
})
export class CaptainChangeComponent implements OnInit {

  title: string = ""
  clubId: Number = 0;
  matchId: Number = 0;

  playerList: PlayerModel[] = [];
  match: MatchModel;
  tournamentClubCaptain: TournamentClubCaptainModel;

  constructor(
    private route: ActivatedRoute,
    private tournamentClubCaptainService: TournamentClubCaptainService,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.clubId = this.route.snapshot.params["clubId"];
    this.matchId = this.route.snapshot.params["matchId"];
    let type = this.route.snapshot.params["type"]; // 1 -->Captain Change 2--> Vice captain change

    if (type == 1) {//captain change
      this.title = "Captain Change";
    }
    if (type == 2) {//vice captain change
      this.title = "Vice Captain Change"
    }
  }

  getMatch() {
    this.matchService.getMatchById(this.matchId).subscribe(
      response => {
        this.match = response;
        this.getTournamentCaptain();
      },
      error => {
        console.log(error);
      }
    );
  }

  getTournamentCaptain() {
    this.tournamentClubCaptainService.getTournamentCaptains(this.match.tournamentId.tournamentId, this.clubId).subscribe(
      response => {

      }
    );
  }

  getPlayerList(type) {

  }

}
