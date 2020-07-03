import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { PlayerWrapper } from '../../class-model/PlayerWrapper';
import { PlayerModel } from '../../class-model/PlayerModel';

@Injectable({
  providedIn: 'root'
})
export class TournamentClubPlayerService {

  constructor(
    private http: HttpClient
  ) { }

  tournamentClubPlayerRegister(clubId: Number, tournamentId: Number, playerWrapper: PlayerWrapper) {
    return this.http.post<Number>(`${API_URL}/tournamentclubplayer/${clubId}/${tournamentId}`, playerWrapper);
  }

  tournamentClubPlayerList(clubId: Number, tournamentId: Number) {
    return this.http.get<PlayerModel[]>(`${API_URL}/tournamentclubplayer/${clubId}/${tournamentId}`, {});
  }

  tournamentClubPlayerUpdate(clubId: Number, tournamentId: Number, playerWrapper: PlayerWrapper) {
    return this.http.put<Number>(`${API_URL}/tournamentclubplayer/${clubId}/${tournamentId}`, playerWrapper);
  }
}
