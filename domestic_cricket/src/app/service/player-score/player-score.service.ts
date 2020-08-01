import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerRateModel } from '../../class-model/PlayerRateModel';
import { API_URL } from '../../app.constants';
import { PlayerMatchRecordModel } from '../../class-model/PlayerMatchRecordModel';

@Injectable({
  providedIn: 'root'
})
export class PlayerScoreService {

  constructor(
    private http: HttpClient
  ) { }

  getPlayerRateList(clubId: Number, playerType: Number, order: Number) {
    return this.http.get<PlayerRateModel[]>(`${API_URL}/playerscore/${clubId}/${playerType}/${order}`);
  }

  getPlayerMatchRecord(playerId: Number, playerType: Number, matchType: Number) {
    return this.http.get<PlayerMatchRecordModel[]>(`${API_URL}/playerscore/playerrecord/${playerId}/${playerType}/${matchType}`, {});
  }
}
