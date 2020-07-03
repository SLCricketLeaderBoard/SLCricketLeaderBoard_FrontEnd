import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerModel } from '../../class-model/PlayerModel';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private http: HttpClient
  ) { }

  playerSignup(player: PlayerModel) {
    return this.http.post<Number>(`${API_URL}/player/signup`, player);
  }

  playerUpdate(player: PlayerModel) {
    return this.http.put<Number>(`${API_URL}/player`, player);
  }

  getClubPlayerList(clubId: Number, status: Number) {
    return this.http.get<PlayerModel[]>(`${API_URL}/player/club/${clubId}/${status}`, {});
  }

  getPlayer(playerId: Number) {
    return this.http.get<PlayerModel>(`${API_URL}/player/${playerId}`, {});
  }

  playerAccountDeactivate(playerId: Number) {
    return this.http.put<Number>(`${API_URL}/player/deactivate/${playerId}`, {});
  }

}
