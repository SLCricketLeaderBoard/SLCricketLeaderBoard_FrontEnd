import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ClubPaymentModel } from '../../class-model/ClubPaymentModel';
import { ClubService } from '../../service/club/club.service';
import { ClubPaymentService } from '../../service/club-payment/club-payment.service';
import { SwalMessage } from '../../shared/swal-message';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-club-payment',
  templateUrl: './club-payment.component.html',
  styleUrls: ['./club-payment.component.scss']
})
export class ClubPaymentComponent implements OnInit {

 
  clubName:String='';
  clubId:Number=0;

  clubPaymentList:ClubPaymentModel[] = [];

  isPaymentAdd:Boolean = false;

  swalMessage:SwalMessage = new SwalMessage();
  warningMessage:String="";

  clubPaymentForm = this.fb.group({
    amount : ['',[Validators.required, Validators.pattern('^\\\d+(\\\.\\\d{1,2})?$')]],
    year : ['', [Validators.required, Validators.pattern('^\\\d{4}$')]]
  });

  get amountField(){
    return this.clubPaymentForm.get('amount');
  }

  get yearField(){
    return this.clubPaymentForm.get('year');
  }

  constructor(
    private route : ActivatedRoute,
    private fb : FormBuilder,
    private clubSetivce : ClubService,
    private clubPaymentService : ClubPaymentService
  ) { }

  ngOnInit() {
    this.clubId = this.route.snapshot.params['clubId'];
    this.clubName = this.route.snapshot.params['clubName'];

    if(this.clubId>0){
      this.getClubPaymentData();
    }
  }


  clubPaymentFormSubmit(){

    Swal.fire({
      title: 'Are you sure?',
      text: "Can't revert(delete/Update) after Payment done!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Do Payment!'
    }).then((result) => {
      if (result.value) {
        this.clubSetivce.getClubData(this.clubId).subscribe(
          response => {
            let club=response;
            let clubPayment:ClubPaymentModel = new ClubPaymentModel(-1,this.amountField.value,this.yearField.value,new Date(),club);
            this.clubPaymentService.addClubPayment(clubPayment).subscribe(
              response => {
                if(response==0){
                  this.swalMessage.notSuccessMessage("Payment already payed");
                }
                if(response==1){
                  this.swalMessage.successMessage("Payment Successful");
                  this.getClubPaymentData();
                  this.isPaymentAdd=false;
                }
                if(response==2){
                  this.swalMessage.successMessage("Payment Successful and Club activated");
                  this.getClubPaymentData();
                  this.isPaymentAdd=false;
                }
                
              },
              error => {
                this.swalMessage.notSuccessMessage("Payment not successful");
                console.log(error);
              }
            );
          },
          error => {
            this.swalMessage.notSuccessMessage('Payment not successful');
            console.log("There is no club or serverside error");
            console.log(error);
          }
        );
      }
    });
  }

  getClubPaymentData(){
    this.clubPaymentService.getClubpaymentData(this.clubId).subscribe(
      response => {
        this.clubPaymentList = response;
        if(this.clubPaymentList.length==0){
          this.warningMessage = "There are no any payments details.";
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  clubPaymentAdd(){
    this.isPaymentAdd = true;
  }

  closeClubAddPaymentBox(){
    this.isPaymentAdd = false;
  }

  close(){
    this.warningMessage="";
  }

}
