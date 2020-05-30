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

  updateClub(club : ClubModel){
    return this.http.put<Number>(`${API_URL}/club`,club);
  }

  getClubs(){
    return this.http.get<ClubModel[]>(`${API_URL}/club`,{});
  }

  getClubData(clubId:Number){
    return this.http.get<ClubModel>(`${API_URL}/club/${clubId}`,{});
  }

  getClubDataOfManager(userId:Number){
    return this.http.get<ClubModel>(`${API_URL}/club/manager/${userId}`);
  }
  
}
