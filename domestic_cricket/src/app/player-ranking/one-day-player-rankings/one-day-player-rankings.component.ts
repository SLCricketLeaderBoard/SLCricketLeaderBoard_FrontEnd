import { Component, OnInit } from '@angular/core';
import { PlayerRankingService } from '../../service/player-ranking/player-ranking.service';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';
import { BatmanScoreModel } from '../../class-model/BatmanScoreModel';
import { FieldingScoreModel } from '../../class-model/FieldingScoreModel';


@Component({
  selector: 'app-one-day-player-rankings',
  templateUrl: './one-day-player-rankings.component.html',
  styleUrls: ['./one-day-player-rankings.component.scss']
})
export class OneDayPlayerRankingsComponent implements OnInit {

  topBallers: BallerScoreModel[];
  topBatmen: BatmanScoreModel[];
  topAllRounders: FieldingScoreModel[];
  render: number = 0;

  constructor(private playerRankingService:PlayerRankingService) { }
  ngOnInit() {
    this.playerRankingService.getTopBallersOneDay().subscribe(res=>{
      this.topBallers=res;
      // console.log(res);
      this.render=this.render+1;
    })

    this.playerRankingService.getTopBatmenOneDay().subscribe(res=>{
      this.topBatmen=res;
      // console.log(res);
      this.render=this.render+1;
    })

    this.playerRankingService.getTopFilderOneDay().subscribe(res=>{
      this.topAllRounders=res;
      // console.log(res);
      this.render=this.render+1;
    })
  }

}
