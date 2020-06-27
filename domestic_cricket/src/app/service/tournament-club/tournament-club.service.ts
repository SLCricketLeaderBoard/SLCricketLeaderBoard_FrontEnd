import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentClubModel } from '../../class-model/TournamentClubModel';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TournamentClubService {

  constructor(
    private http: HttpClient
  ) { }

  // tournementClubRegister(clubId: Number, tournamentId: Number) {
  //   return this.http.post<TournamentClubModel>(`${API_URL}/tournamentclub/${clubId}/${tournamentId}`, {});
  // }


}
