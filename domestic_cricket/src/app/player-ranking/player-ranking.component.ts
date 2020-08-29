import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BallerScoreModel } from '../class-model/BallerScoreModel';


@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.scss']
})
export class PlayerRankingComponent implements OnInit {

  topBallersOneday: BallerScoreModel[];
  constructor(private router:Router,private route:ActivatedRoute) { }
  ngOnInit() {
   
  }

  oneDay(){
    this.router.navigate(["oneDay"], { relativeTo: this.route });
  }
  threeFourDays(){
    this.router.navigate(["threeFourDays"], { relativeTo: this.route });
  }
}
