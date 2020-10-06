import { Component, OnInit } from '@angular/core';
import { SponsorModel } from "../../../class-model/SponsorModel";
import { ClubService } from "../../../service/club/club.service";
import { SponsorService } from '../../../service/sponsor/sponsor.service';


@Component({
  selector: 'app-sponsor-request',
  templateUrl: './sponsor-request.component.html',
  styleUrls: ['./sponsor-request.component.scss']
})
export class SponsorRequestComponent implements OnInit {
  sponsorList: SponsorModel[] = [];
  isSponsorDataLoad = false;


  constructor(private clubService: ClubService,private sponsorService: SponsorService) { }

  ngOnInit() {
    let userID = +sessionStorage.getItem("userID");
    console.log(userID)
    this.getSponsorReq(userID);
  }

  getSponsorReq(userID) {
    this.sponsorService.getclubsponsor(userID).subscribe(
      (response) => {
        console.log(response)
        this.sponsorList = response;
        this.isSponsorDataLoad = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
