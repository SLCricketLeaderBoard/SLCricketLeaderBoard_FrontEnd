import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentModel } from '../../../../class-model/TournamentModel';
import { TournamentService } from '../../../../service/tournament/tournament.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  tournaments:TournamentModel[]=[];

  constructor(private router: Router, private route: ActivatedRoute,private tournamentService:TournamentService) { 

    this.tournamentService.getTournaments().subscribe(res=>{
      console.log("tournemenst");
      console.log(res);
      this.tournaments= res;
    })
  }

  ngOnInit() {
  }
}
