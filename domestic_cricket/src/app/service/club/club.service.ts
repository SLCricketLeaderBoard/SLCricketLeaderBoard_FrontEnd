import { Injectable } from '@angular/core';
import { ClubModel } from '../../class-model/ClubModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getClubs(status:Number){
    return this.http.get<ClubModel[]>(`${API_URL}/club/list/${status}`,{});
  }

  getClubData(clubId:Number){
    return this.http.get<ClubModel>(`${API_URL}/club/${clubId}`,{});
  }

  getClubDataOfManager(userId:Number){
    return this.http.get<ClubModel>(`${API_URL}/club/manager/${userId}`);
  }

  getClubsForMatches(tournamentId:Number){
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<ClubModel[]>(`${API_URL}/tournamentclub/registeredClubs/${tournamentId}`,{headers});
  }
  
}
