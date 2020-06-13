import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClubPaymentModel } from '../../class-model/ClubPaymentModel';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ClubPaymentService {

  constructor(
    private http : HttpClient
  ) { }

  addClubPayment(clubpayment:ClubPaymentModel){
    return this.http.post<Number>(`${API_URL}/clubpayment`,clubpayment);
  }

  getClubpaymentData(clubId:Number){
    return this.http.get<ClubPaymentModel[]>(`${API_URL}/clubpayment/${clubId}`,{});
  }
}
