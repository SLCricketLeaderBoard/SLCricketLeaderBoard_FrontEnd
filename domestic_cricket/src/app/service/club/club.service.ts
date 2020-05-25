import { Injectable } from '@angular/core';
import { ClubModel } from '../../class-model/ClubModel';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(
    private http : HttpClient
  ) { }

  registerClub(club : ClubModel){
    return this.http.post<Number>(`${API_URL}/club`,club);
  }
}
