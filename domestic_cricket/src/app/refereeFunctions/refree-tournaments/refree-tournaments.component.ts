import { Component, OnInit } from '@angular/core';
import { TournamentModel } from '../../class-model/TournamentModel';
import { TournamentService } from '../../service/tournament/tournament.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refree-tournaments',
  templateUrl: './refree-tournaments.component.html',
  styleUrls: ['./refree-tournaments.component.scss']
})
export class RefreeTournamentsComponent implements OnInit {

  registrationOpenTournaments:TournamentModel[]=[];
  registrationClosedTournaments:TournamentModel[]=[];
  constructor(private router: Router, private route: ActivatedRoute,private tournamentService:TournamentService) {

    this.tournamentService.getRegistrationOpenTournaments().subscribe(res=>{
      this.registrationOpenTournaments= res;
    })

    this.tournamentService.getRegistrationClosedTournaments().subscribe(res=>{
     
      this.registrationClosedTournaments= res;
    })
   }

  ngOnInit() {

  }

  viewMatches(tournament: TournamentModel){
    console.log(tournament);
    this.router.navigate(["match-list",tournament.tournamentId], { relativeTo: this.route });

  }

}
