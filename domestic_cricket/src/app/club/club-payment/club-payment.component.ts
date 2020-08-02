import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ClubPaymentModel } from "../../class-model/ClubPaymentModel";
import { ClubService } from "../../service/club/club.service";
import { ClubPaymentService } from "../../service/club-payment/club-payment.service";
import { SwalMessage } from "../../shared/swal-message";
import Swal from "sweetalert2";
import * as moment from "moment";
import { AnnualClubPaymentModel } from "../../class-model/AnnualClubPaymentModel";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-club-payment",
  templateUrl: "./club-payment.component.html",
  styleUrls: ["./club-payment.component.scss"],
})
export class ClubPaymentComponent implements OnInit {
  userRole: Number = 0;
  clubName: String = "";
  clubId: Number = 0;
  regDate: Date;

  clubPaymentList: ClubPaymentModel[] = [];
  paymentYearList: Number[] = [];
  annualClubPaymentList: AnnualClubPaymentModel[] = [];

  isPaymentAdd: Boolean = false;

  swalMessage: SwalMessage = new SwalMessage();
  warningMessage: String = "";
  clubDeactivatedWarningMessage: string = "";

  clubPaymentForm = this.fb.group({
    amount: [
      "",
      [Validators.required, Validators.pattern("^\\d+(\\.\\d{1,2})?$")],
    ],
    year: ["", [Validators.required, Validators.required]],
  });

  get amountField() {
    return this.clubPaymentForm.get("amount");
  }

  get yearField() {
    return this.clubPaymentForm.get("year");
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private clubSetivce: ClubService,
    private clubPaymentService: ClubPaymentService,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.userRole = +sessionStorage.getItem("userRole");
    this.clubId = this.route.snapshot.params["clubId"];
    this.clubName = this.route.snapshot.params["clubName"];
    this.regDate = this.route.snapshot.params["regDate"];

    if (this.clubId > 0) {
      this.getClubPaymentData();

      if (this.userRole == 1) {
        let obj1: AnnualClubPaymentModel = new AnnualClubPaymentModel(
          2020,
          1200
        );
        let obj2: AnnualClubPaymentModel = new AnnualClubPaymentModel(
          2021,
          2400
        );
        this.annualClubPaymentList.push(obj1);
        this.annualClubPaymentList.push(obj2);
      } else {
        let isClubActivated = +sessionStorage.getItem("isClubActivated");
        if (isClubActivated == 0) {
          this.clubDeactivatedWarningMessage =
            "Club is deactivated.Because annual payment not completed";
        }
      }
    }
  }

  updatePaymentFirebase(){
    this.afs.collection('clubs', ref => ref.where('club_Id', '==', this.clubId)).snapshotChanges().subscribe( (res: any) => {
      let id = res[0].payload.doc.id;
      console.log(id)
      this.afs.collection("clubs").doc(id).update({payment: true});
    })
  }

  clubPaymentFormSubmit() {
    Swal.fire({
      title: "Are you sure?",
      text: "Can't revert(delete/Update) after Payment done!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Do Payment!",
    }).then((result) => {
      if (result.value) {
        this.clubSetivce.getClubData(this.clubId).subscribe(
          (response) => {
            let club = response;
            let clubPayment: ClubPaymentModel = new ClubPaymentModel(
              -1,
              this.amountField.value,
              this.yearField.value,
              new Date(),
              club
            );
            this.clubPaymentService.addClubPayment(clubPayment).subscribe(
              (response) => {
                if (response == 0) {
                  this.swalMessage.notSuccessMessage("Payment already payed");
                }
                if (response == 1) {
                  this.swalMessage.successMessage("Payment Successful");
                  this.getClubPaymentData();
                  this.getPaymentYears();
                  this.isPaymentAdd = false;
                  this.updatePaymentFirebase();
                }
                if (response == 2) {
                  this.swalMessage.successMessage(
                    "Payment Successful and Club activated"
                  );
                  this.getClubPaymentData();
                  this.getPaymentYears();
                  this.isPaymentAdd = false;
                }
              },
              (error) => {
                this.swalMessage.notSuccessMessage("Payment not successful");
                console.log(error);
              }
            );
          },
          (error) => {
            this.swalMessage.notSuccessMessage("Payment not successful");
            console.log("There is no club or serverside error");
            console.log(error);
          }
        );
      }
    });
  }

  getClubPaymentData() {
    this.clubPaymentService.getClubpaymentData(this.clubId).subscribe(
      (response) => {
        this.clubPaymentList = response;
        if (this.clubPaymentList.length == 0) {
          this.warningMessage = "There are no any payments details.";
        }
        this.getPaymentYears();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPaymentYears() {
    this.paymentYearList = [];
    let currentYear = +moment(new Date()).format("YYYY");
    let regYear = +moment(this.regDate).format("YYYY");
    if (this.clubPaymentList.length == 0) {
      for (let i = regYear; i <= currentYear; i++) {
        this.paymentYearList.push(i);
      }
    } else {
      let lastYearPayment = +this.clubPaymentList[0].paymentForYear;
      for (let i = lastYearPayment + 1; i <= currentYear; i++) {
        this.paymentYearList.push(i);
      }
    }
    this.paymentYearList.push(currentYear + 1);
  }

  clubPaymentAdd() {
    if (this.paymentYearList.length > 0) {
      let paymentYearSuggest = this.paymentYearList[0];
      let amountSuggest = 0;

      this.annualClubPaymentList.forEach((element) => {
        if (element.year == paymentYearSuggest) {
          amountSuggest = +element.amount;
        }
      });

      this.clubPaymentForm.patchValue({
        amount: amountSuggest,
        year: this.paymentYearList[0],
      });
    }

    this.isPaymentAdd = true;
  }

  closeClubAddPaymentBox() {
    this.isPaymentAdd = false;
  }

  close() {
    this.warningMessage = "";
  }
}
