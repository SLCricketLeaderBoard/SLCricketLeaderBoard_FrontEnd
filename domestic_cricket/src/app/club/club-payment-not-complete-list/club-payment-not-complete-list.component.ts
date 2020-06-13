import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ClubModel } from '../../class-model/ClubModel';

@Component({
  selector: 'app-club-payment-not-complete-list',
  templateUrl: './club-payment-not-complete-list.component.html',
  styleUrls: ['./club-payment-not-complete-list.component.scss']
})
export class ClubPaymentNotCompleteListComponent implements OnInit {

  currentYear:Number;
  paymentNotCompletedList:ClubModel[] = [];

  constructor() { }

  ngOnInit() {
    this.currentYear = +moment(new Date()).format('YYYY');
  }

  getPaymentNotCompletedClubList(){
    
  }

}
