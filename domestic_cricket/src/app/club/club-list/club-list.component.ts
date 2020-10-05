import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClubService } from "../../service/club/club.service";
import { ClubModel } from "../../class-model/ClubModel";
import { ReportService } from '../../service/report/report.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: "app-club-list",
  templateUrl: "./club-list.component.html",
  styleUrls: ["./club-list.component.scss"],
})
export class ClubListComponent implements OnInit {
  clubList: ClubModel[] = [];
  isClubDataLoad = false;

  constructor(private router: Router, private clubService: ClubService, private reportService: ReportService) { }

  ngOnInit() {
    let userRole = +sessionStorage.getItem("userRole");
    if (userRole != 1) {
      this.router.navigate([""]);
    }
    this.getClubs();
  }

  getClubs() {
    this.clubService.getClubs(1).subscribe(
      (response) => {
        this.clubList = response;
        this.isClubDataLoad = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clubRegister() {
    this.router.navigate(["club-register", 0]);
  }

  clubUpdate(clubId: Number) {
    this.router.navigate(["club-register", clubId]);
  }

  clubPayment(clubId: Number, clubName: String, regDate: Date) {
    this.router.navigate(["club-payment", clubId, clubName, regDate]);
  }

  clubNotPaymentList() {
    this.router.navigate(["club-payment-not-complete-list"]);
  }


}
