import { Component, OnInit } from '@angular/core';
import { MatchModel } from '../../class-model/MatchModel';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from '../../service/match/match.service';
import { TournamentService } from '../../service/tournament/tournament.service';

@Component({
  selector: 'app-referee-match-list',
  templateUrl: './referee-match-list.component.html',
  styleUrls: ['./referee-match-list.component.scss']
})
export class RefereeMatchListComponent implements OnInit {

  playedMatches:MatchModel[];
  toPlayMatches:MatchModel[];
  updatedMatches: MatchModel[];
  tournamentId:number;
  userId:String
  constructor(private router: Router, private route: ActivatedRoute,private matchService:MatchService,private tournamentService:TournamentService) {
    this.route.params.subscribe(res => {
      this.tournamentId = res['tournamentId'];
    })

    this.userId=sessionStorage.getItem('userId');
   }

  ngOnInit() {

    this.matchService.getRefereeMatchesPlayed(this.tournamentId,this.userId).subscribe(res=>{
      console.log(res);
      this.playedMatches=res;
    })



    this.matchService.getRefereeMatchesUpcomming(this.tournamentId,this.userId).subscribe(res=>{
      console.log(res);
      this.toPlayMatches=res;
    })

    this.matchService.getRefereeMatchesPlayedUpdated(this.tournamentId,this.userId).subscribe(res=>{
      console.log(res);
      this.updatedMatches=res;
    })

  }

}
