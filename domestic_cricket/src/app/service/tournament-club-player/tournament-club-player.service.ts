import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { PlayerWrapper } from '../../class-model/PlayerWrapper';

@Injectable({
  providedIn: 'root'
})
export class TournamentClubPlayerService {

  constructor(
    private http: HttpClient
  ) { }

  tournamentClubPlayerRegister(clubId: Number, tournamentId: Number, playerWrapper: PlayerWrapper) {
    return this.http.post<void>(`${API_URL}/tournamentclubplayer/${clubId}/${tournamentId}`, playerWrapper);
  }
}
