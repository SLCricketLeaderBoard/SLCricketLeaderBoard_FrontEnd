import { Component, OnInit } from '@angular/core';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';
import { BatmanScoreModel } from '../../class-model/BatmanScoreModel';
import { FieldingScoreModel } from '../../class-model/FieldingScoreModel';
import { PlayerRankingService } from '../../service/player-ranking/player-ranking.service';

@Component({
  selector: 'app-t-twenty-player-rankings',
  templateUrl: './t-twenty-player-rankings.component.html',
  styleUrls: ['./t-twenty-player-rankings.component.scss']
})
export class TTwentyPlayerRankingsComponent implements OnInit {

  render: number = 0;
  topBallers: BallerScoreModel[];
  topBatmen: BatmanScoreModel[];
  topAllRounders: FieldingScoreModel[];


  constructor(private playerRankingService:PlayerRankingService) { }
  ngOnInit() {
    this.playerRankingService.getTopBallersT20().subscribe(res=>{
      this.topBallers=res;
      this.render=this.render+1;
      console.log(res);
    })

    this.playerRankingService.getTopBatmenT20().subscribe(res=>{
      this.topBatmen=res;
      this.render=this.render+1;
      console.log(res);
    })
    
    this.playerRankingService.getTopFilderT20().subscribe(res=>{
      this.topAllRounders=res;
      this.render=this.render+1;
      console.log(this.topAllRounders);
    })
  }
}
