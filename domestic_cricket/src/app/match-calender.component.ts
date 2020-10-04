import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../service/tournament/tournament.service';
import { TournamentModel } from '../class-model/TournamentModel';

@Component({
  selector: 'app-match-calender',
  templateUrl: './match-calender.component.html',
  styleUrls: ['./match-calender.component.scss']
})
export class MatchCalenderComponent implements OnInit {

  tournaments:TournamentModel[];
  constructor(private tournamentService:TournamentService) { }

  ngOnInit() {

    this.tournamentService.getTournamentsForCalender().subscribe(res=>{
      this.tournaments=res;
    })
  }

}
