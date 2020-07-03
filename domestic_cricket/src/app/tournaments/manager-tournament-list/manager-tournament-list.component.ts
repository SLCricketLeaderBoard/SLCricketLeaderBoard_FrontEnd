import { Component, OnInit } from '@angular/core';
import { TournamentModel } from '../../class-model/TournamentModel';
import { TournamentClubService } from '../../service/tournament-club/tournament-club.service';
import { TournamentClubModel } from '../../class-model/TournamentClubModel';
import { TournamentService } from '../../service/tournament/tournament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-tournament-list',
  templateUrl: './manager-tournament-list.component.html',
  styleUrls: ['./manager-tournament-list.component.scss']
})
export class ManagerTournamentListComponent implements OnInit {

  clubId: Number = 0;
  registeredTournaments: TournamentClubModel[] = [];
  upcomingTournaments: TournamentModel[] = [];

  constructor(
    private tournamentClubService: TournamentClubService,
    private tournamentService: TournamentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clubId = +sessionStorage.getItem("clubId");
    this.getClubRegisteredTournaments();
    this.getUpcomingTournamentForClub();
  }

  getClubRegisteredTournaments() {
    this.registeredTournaments = [];
    this.tournamentClubService.getClubRegisteredTournaments(this.clubId).subscribe(
      response => {
        this.registeredTournaments = response;
      }
    );
  }

  getUpcomingTournamentForClub() {
    this.upcomingTournaments = [];
    this.tournamentService.getUpcomingTournamentForClub(this.clubId).subscribe(
      response => {
        this.upcomingTournaments = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  register(tournamentId: Number) {
    this.router.navigate(['player-selection', tournamentId, 1]);
  }

  update(tournamentId: Number) {
    this.router.navigate(['player-selection', tournamentId, 2]);
  }

  isRegistrationClosed(closeDateInput: Date) {
    let closeDate = new Date(closeDateInput);
    let currentDate = new Date();

    if (currentDate.getTime() <= closeDate.getTime()) {
      return false;
    } else {
      return true;
    }
  }

}
