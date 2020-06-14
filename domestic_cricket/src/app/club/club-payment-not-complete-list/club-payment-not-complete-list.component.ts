import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { ClubModel } from "../../class-model/ClubModel";
import { ClubService } from "../../service/club/club.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-club-payment-not-complete-list",
  templateUrl: "./club-payment-not-complete-list.component.html",
  styleUrls: ["./club-payment-not-complete-list.component.scss"],
})
export class ClubPaymentNotCompleteListComponent implements OnInit {
  currentYear: Number;
  paymentNotCompletedList: ClubModel[] = [];

  constructor(private clubService: ClubService, private router: Router) {}

  ngOnInit() {
    this.currentYear = +moment(new Date()).format("YYYY");
    this.getPaymentNotCompletedClubList();
  }

  getPaymentNotCompletedClubList() {
    this.clubService.getClubs(0).subscribe(
      (response) => {
        this.paymentNotCompletedList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clubPayment(clubId: Number, clubName: String, regDate: Date) {
    this.router.navigate(["club-payment", clubId, clubName, regDate]);
  }
}
