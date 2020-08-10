import { Component, OnInit } from '@angular/core';
import { BallerScoreModel } from '../class-model/BallerScoreModel';
import { PlayerRankingService } from '../service/player-ranking/player-ranking.service';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.scss']
})
export class PlayerRankingComponent implements OnInit {

  topBallersOneday: BallerScoreModel[];
  constructor(private playerRankingService:PlayerRankingService) { }
  ngOnInit() {
    this.playerRankingService.getTopBallersOneDay().subscribe(res=>{
      this.topBallersOneday=res;
      console.log(res);
      
    })
  }
}
