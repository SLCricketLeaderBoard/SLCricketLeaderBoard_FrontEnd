import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../service/club/club.service';
import { ClubModel } from '../../class-model/ClubModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss']
})
export class ClubDetailsComponent implements OnInit {

  club:ClubModel = null;

  constructor(
    private clubService : ClubService,
    private router : Router
  ) { }

  ngOnInit() {
    let userId = sessionStorage.getItem("userId");
    this.getClubData(userId);
  }

  getClubData(userId){
    this.clubService.getClubDataOfManager(userId).subscribe(
      response => {
        this.club = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  clubUpdate(){
    this.router.navigate(['club-register',this.club.clubId]);
  }

}
