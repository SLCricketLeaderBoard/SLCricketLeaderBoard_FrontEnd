import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-ranking-element',
  templateUrl: './player-ranking-element.component.html',
  styleUrls: ['./player-ranking-element.component.scss']
})
export class PlayerRankingElementComponent implements OnInit {

  @Input() playerReord : any;
  @Input() i : any;
  
  constructor() { }

  ngOnInit() {
  }

}
