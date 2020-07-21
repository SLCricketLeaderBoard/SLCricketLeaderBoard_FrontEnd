import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentClubCaptainModel } from '../class-model/TournamentClubCaptainModel';
import { API_URL } from '../app.constants';
import { PlayerModel } from '../class-model/PlayerModel';

@Injectable({
  providedIn: 'root'
})
export class TournamentClubCaptainService {

  constructor(
    private http: HttpClient
  ) { }

  tournamentCaptainsSave(tournamentClubCaptain: TournamentClubCaptainModel) {
    return this.http.post<Number>(`${API_URL}/tournamentclubcaptain`, tournamentClubCaptain);
  }

  getTournamentCaptains(tournamentId: Number, clubId: Number) {
    return this.http.get<PlayerModel[]>(`${API_URL}/tournamentclubcaptain/${tournamentId}/${clubId}`, {});
  }

  tournamentCaptainsUpdate(tournamentClubCaptain: TournamentClubCaptainModel) {
    return this.http.put<Number>(`${API_URL}/tournamentclubcaptain`, tournamentClubCaptain);
  }
}
