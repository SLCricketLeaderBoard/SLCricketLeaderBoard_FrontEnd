import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-player-ranking-element',
  templateUrl: './player-ranking-element.component.html',
  styleUrls: ['./player-ranking-element.component.scss']
})
export class PlayerRankingElementComponent implements OnInit {

  @Input() players: any[];
  @Input() i: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  playerProfile(id: Number) {
    console.log(id);
    this.router.navigate(["player", id]);

    //this.router.navigate(["player",id],{ relativeTo: this.route ,queryParams:{rank:this.i}});
  }

}
