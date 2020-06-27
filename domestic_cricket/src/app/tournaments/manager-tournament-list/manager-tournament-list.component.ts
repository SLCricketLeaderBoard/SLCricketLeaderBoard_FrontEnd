import { Component, OnInit } from '@angular/core';
import { TournamentModel } from '../../class-model/TournamentModel';
import { TournamentClubService } from '../../service/tournament-club/tournament-club.service';
import { TournamentClubModel } from '../../class-model/TournamentClubModel';

@Component({
  selector: 'app-manager-tournament-list',
  templateUrl: './manager-tournament-list.component.html',
  styleUrls: ['./manager-tournament-list.component.scss']
})
export class ManagerTournamentListComponent implements OnInit {

  clubId: Number = 0;
  registeredTournaments: TournamentClubModel[] = [];

  constructor(
    private tournamentClubService: TournamentClubService
  ) { }

  ngOnInit() {
    this.clubId = +sessionStorage.getItem("clubId");
    this.getClubRegisteredTournaments();
  }

  getClubRegisteredTournaments() {
    this.tournamentClubService.getClubRegisteredTournaments(this.clubId).subscribe(
      response => {
        this.registeredTournaments = response;
      }
    );
  }

}
