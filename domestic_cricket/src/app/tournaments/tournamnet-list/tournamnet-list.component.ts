import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TournamentService } from "../../service/tournament/tournament.service";
import { TournamentModel } from "../../class-model/TournamentModel";

@Component({
  selector: "app-club-list",
  templateUrl: "./tournamnet-list.component.html",
  styleUrls: ["./tournamnet-list.component.scss"],
})
export class TournamentListComponent implements OnInit {
  clubList: TournamentModel[] = [];

  constructor(private router: Router, private tournamentService: TournamentService) {}

  ngOnInit() {
    let userRole = +sessionStorage.getItem("userRole");
    if (userRole != 1) {
      this.router.navigate([""]);
    }
    this.getTournaments();
  }

  getTournaments() {
    this.tournamentService.getTournaments(1).subscribe(
      (response) => {
        this.tournamentList= response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  tournamentRegister() {
    this.router.navigate(["create-tournamnet", 0]); /*or touranament list*/ 
  }

  tournamentUpdate(tournamentId: Number) {
    this.router.navigate(["create-tournamnet", tournamentId]);
  }

  tournamentList(tournamentId: Number, tournamentName: String, startDate: Date,endDate:Date) {
    this.router.navigate(["", tournamentId, tournamentName, startDate,endDate]);
  }

  
}
