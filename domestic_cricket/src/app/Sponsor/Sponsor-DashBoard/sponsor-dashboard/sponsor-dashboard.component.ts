import { Component, OnInit } from '@angular/core';
import { ClubModel } from "../../../class-model/ClubModel";
import { ClubService } from "../../../service/club/club.service";
import { SponsorService } from '../../../service/sponsor/sponsor.service';

@Component({
  selector: 'app-sponsor-dashboard',
  templateUrl: './sponsor-dashboard.component.html',
  styleUrls: ['./sponsor-dashboard.component.scss']
})
export class SponsorDashboardComponent implements OnInit {
  clubList: ClubModel[] = [];
  isClubDataLoad = false;

  constructor(private clubService: ClubService, private sponsorService: SponsorService) { }

  ngOnInit() {
    let userRole = +sessionStorage.getItem("userRole");
    console.log(userRole)
    this.getClubs();
  }

  getClubs() {
    this.clubService.getClubs(1).subscribe(
      (response) => {
        console.log(response)
        this.clubList = response;
        this.isClubDataLoad = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendRequest(clubId: number){
    let dummySponsorClub = {"status": 0, "sponsor_id": 1, "club_id": 2}
    this.sponsorService.sponsorClubRequest(dummySponsorClub).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
