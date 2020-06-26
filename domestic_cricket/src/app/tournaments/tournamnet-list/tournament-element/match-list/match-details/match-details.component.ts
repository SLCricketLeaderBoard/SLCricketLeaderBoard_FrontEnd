import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchModel } from '../../../../../class-model/MatchModel';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  match:MatchModel;
  matchId: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(res => {
      this.matchId = res['matchId'];
      console.log(this.matchId);
    })
    
  }

}
