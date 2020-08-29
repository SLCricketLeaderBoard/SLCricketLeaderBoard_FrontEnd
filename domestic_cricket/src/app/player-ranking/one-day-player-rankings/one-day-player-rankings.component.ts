import { Component, OnInit } from '@angular/core';
import { PlayerRankingService } from '../../service/player-ranking/player-ranking.service';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';


@Component({
  selector: 'app-one-day-player-rankings',
  templateUrl: './one-day-player-rankings.component.html',
  styleUrls: ['./one-day-player-rankings.component.scss']
})
export class OneDayPlayerRankingsComponent implements OnInit {

  topBallersOneday: BallerScoreModel[];
  constructor(private playerRankingService:PlayerRankingService) { }
  ngOnInit() {
    this.playerRankingService.getTopBallersOneDay().subscribe(res=>{
      this.topBallersOneday=res;
      console.log(res);
      
    })
  }

}
