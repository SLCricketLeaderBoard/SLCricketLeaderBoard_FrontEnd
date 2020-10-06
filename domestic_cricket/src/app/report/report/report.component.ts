import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../service/tournament/tournament.service';
import { TournamentModel } from '../../class-model/TournamentModel';
import { ReportService } from '../../service/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  showSpinner: Boolean = false;

  upComingTournament: TournamentModel[] = [];
  pastTournament: TournamentModel[] = [];
  onGoingTournament: TournamentModel[] = [];

  constructor(
    private reportService: ReportService,
    private tournamentService: TournamentService
  ) { }

  ngOnInit() {
    this.getTournaments(1);
    this.getTournaments(2);
    this.getTournaments(3);
  }

  clubReport() {
    this.showSpinner = true;
    this.reportService.getClubReport().subscribe(
      response => {
        this.showSpinner = false;
        console.log(response.fileName);
        window.open("assets/reports/" + response.fileName);
      },
      error => {
        this.showSpinner = false;
        console.log(error);
      }
    )
  }

  clubPaymentReport(year) {
    this.showSpinner = true;
    this.reportService.getClubPaymentReport(year).subscribe(
      response => {
        this.showSpinner = false;
        console.log(response.fileName);
        window.open("assets/reports/" + response.fileName);
      },
      error => {
        this.showSpinner = false;
        console.log(error);
      }
    )
  }

  tournamentReport(type) {
    this.showSpinner = true;
    this.reportService.getTournamentReport(type).subscribe(
      response => {
        this.showSpinner = false;
        console.log(response.fileName);
        window.open("assets/reports/" + response.fileName);
      },
      error => {
        this.showSpinner = false;
        console.log(error);
      }
    )
  }

  getTournaments(type) {
    this.tournamentService.getTournamentsByType(type).subscribe(
      response => {
        console.log(response);
        if (type == 1) {
          this.pastTournament = response;
        } else if (type == 2) {
          this.upComingTournament = response;
        } else if (type == 3) {
          this.onGoingTournament = response;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getPastTournamentMatch(tournamentId) {
    console.log(tournamentId)
    this.showSpinner = true;
    this.reportService.getTournamentMatchPast(tournamentId).subscribe(
      response => {
        this.showSpinner = false;
        console.log(response.fileName);
        window.open("assets/reports/" + response.fileName);
      },
      error => {
        this.showSpinner = false;
        console.log(error);
      }
    )
  }

  getTournamentMatchFuture(tournamentId, type) {
    console.log(tournamentId)
    console.log(type)
    this.showSpinner = true;
    this.reportService.getTournamentMatchFuture(tournamentId, type).subscribe(
      response => {
        this.showSpinner = false;
        console.log(response.fileName);
        window.open("assets/reports/" + response.fileName);
      },
      error => {
        this.showSpinner = false;
        console.log(error);
      }
    )
  }

}
