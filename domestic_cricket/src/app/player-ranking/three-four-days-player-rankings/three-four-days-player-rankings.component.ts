import { Component, OnInit } from '@angular/core';
import { FieldingScoreModel } from '../../class-model/FieldingScoreModel';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';
import { BatmanScoreModel } from '../../class-model/BatmanScoreModel';
import { PlayerRankingService } from '../../service/player-ranking/player-ranking.service';

@Component({
  selector: 'app-three-four-days-player-rankings',
  templateUrl: './three-four-days-player-rankings.component.html',
  styleUrls: ['./three-four-days-player-rankings.component.scss']
})
export class ThreeFourDaysPlayerRankingsComponent implements OnInit {

  topBallers: BallerScoreModel[];

  topBatmen: BatmanScoreModel[];

  topAllRounders: FieldingScoreModel[];
  render: number = 0;

  constructor(private playerRankingService:PlayerRankingService) { }
  ngOnInit() {
    this.playerRankingService.getTopBallers34Days().subscribe(res=>{
      this.topBallers=res;
      this.render=this.render+1;
      // console.log(res);
    })

    this.playerRankingService.getTopBatmen34Days().subscribe(res=>{
      this.topBatmen=res;
      this.render=this.render+1;
      // console.log(res);
    })
    
    this.playerRankingService.getTopFilder34Days().subscribe(res=>{
      this.topAllRounders=res;
      this.render=this.render+1;
      // console.log(this.topAllRounders);
    })
  }
}
