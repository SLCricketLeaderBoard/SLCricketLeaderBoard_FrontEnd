import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-overs',
  templateUrl: './match-overs.component.html',
  styleUrls: ['./match-overs.component.scss']
})
export class MatchOversComponent implements OnInit {

  @Input() numberofBalls: Number
  overs: Number;
  balls: Number;
  constructor() { }

  ngOnInit() {
    this.overs=Math.floor(((+this.numberofBalls)/6)); 
    this.balls=(+this.numberofBalls)%6;
  }

}
