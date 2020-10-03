import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.scss']
})
export class MainSiteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(["login"], { relativeTo: this.route });
  }

  live() {
    this.router.navigate(["/live-now"], { relativeTo: this.route });
  }


  clubRank() {
    this.router.navigate(["/club-ranking"], { relativeTo: this.route });
  }



  playerRankings() {
    this.router.navigate(["/player-rankings"], { relativeTo: this.route });
  }


}
