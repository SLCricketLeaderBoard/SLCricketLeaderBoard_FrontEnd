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


  matchCalender() {
    this.router.navigate(["/match-calender"], { relativeTo: this.route });
  }


  tournamentHistory(){
    this.router.navigate(["/played-tournaments"], { relativeTo: this.route });
  }

  signUps(){

  }

  playerSignup() {
    this.router.navigate(['player-signup']);
  }

  managerSignup() {
    this.router.navigate(['manager-signup']);
  }

  sponsorSignup() {
    this.router.navigate(['sponsor-signup']);
  }
  
}
