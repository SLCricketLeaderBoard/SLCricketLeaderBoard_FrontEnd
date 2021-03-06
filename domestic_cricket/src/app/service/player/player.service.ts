import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerModel } from '../../class-model/PlayerModel';
import { API_URL } from '../../app.constants';
import { BatmanScoreModel } from '../../class-model/BatmanScoreModel';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';
import { FieldingScoreModel } from '../../class-model/FieldingScoreModel';
import { PlayerMatchDataModel } from '../../class-model/PlayerMatchDataModel';

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


  getPlayerForDetails(playerId: Number) {
    return this.http.get<PlayerModel>(`${API_URL}/playeRanking/player/${playerId}`, {});
  }

  getPlayerBattingDetails(playerId: Number) {
    return this.http.get<BatmanScoreModel>(`${API_URL}/playeRanking/player/battingDetials/${playerId}`, {});
  }

  getPlayerBowllingDetails(playerId: Number) {
    return this.http.get<BallerScoreModel>(`${API_URL}/playeRanking/player/bowllingDetials/${playerId}`, {});
  }

  getPlayerFieldingDetails(playerId: Number) {
    return this.http.get<FieldingScoreModel>(`${API_URL}/playeRanking/player/fieldingDetials/${playerId}`, {});
  }

  getPlayerMatchData(playerType: Number, userId: Number) {
    return this.http.get<PlayerMatchDataModel[]>(`${API_URL}/player/match/data/${playerType}/${userId}`);
  }

}
