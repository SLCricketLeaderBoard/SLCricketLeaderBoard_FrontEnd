import { Component, OnInit } from '@angular/core';
import { TournamentModel } from '../class-model/TournamentModel';
import { TournamentService } from '../service/tournament/tournament.service';

@Component({
  selector: 'app-played-tounamnet-details',
  templateUrl: './played-tounamnet-details.component.html',
  styleUrls: ['./played-tounamnet-details.component.scss']
})
export class PlayedTounamnetDetailsComponent implements OnInit {
  
  tournaments:TournamentModel[];
  constructor(private tournamentService:TournamentService) { }

  ngOnInit() {
    this.tournamentService.getTournamentsHistory().subscribe(res=>{
      this.tournaments=res;
    })
  }

}
