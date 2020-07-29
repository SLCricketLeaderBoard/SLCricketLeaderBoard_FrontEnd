import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerRateModel } from '../../class-model/PlayerRateModel';
import { API_URL } from '../../app.constants';

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
}
