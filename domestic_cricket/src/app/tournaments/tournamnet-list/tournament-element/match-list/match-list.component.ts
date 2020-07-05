import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentModel } from '../../../../class-model/TournamentModel';
import { TournamentService } from '../../../../service/tournament/tournament.service';
import { MatchService } from '../../../../service/match/match.service';
import { MatchModel } from '../../../../class-model/MatchModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  playedMatches:MatchModel[]=[];
  toPlayMathhes:MatchModel[]=[];

  tournamentId:number;
  tournament:TournamentModel;

  constructor(private router: Router, private route: ActivatedRoute,private matchService:MatchService,private tournamentService:TournamentService) { 
    this.route.params.subscribe(res => {
      this.tournamentId = res['tournamentId'];
    })

    

  }

  ngOnInit() {
      
      this.matchService.getPlayedMatches(this.tournamentId).subscribe(res=>{
        console.log(res);
        
        this.playedMatches=res;
      })

      this.matchService.getToPlayMatches(this.tournamentId).subscribe(res=>{
        console.log(res);
        
        this.toPlayMathhes=res;
      })

      this.tournamentService.getTournamentById(this.tournamentId).subscribe(res=>{
        
        this.tournament=res;
      })
  }

  createMatch(){
      // this.router.navigate(["/create-match",this.tournement.tournamentId], { relativeTo: this.route });
      this.router.navigate(["../../create-match",this.tournamentId], { relativeTo: this.route });
  }
}
