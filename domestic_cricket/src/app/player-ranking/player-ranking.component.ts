import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.scss']
})
export class PlayerRankingComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  ngOnInit() {
    this.oneDay();
   
  }

  oneDay(){
    this.router.navigate(["oneDay"], { relativeTo: this.route });
  }
  threeFourDays(){
    this.router.navigate(["threeFourDays"], { relativeTo: this.route });
  }


  TTwenty(){
    this.router.navigate(["TTwenty"], { relativeTo: this.route });
  }
}
