import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
import { PlayerRecordModel } from '../../class-model/PlayerRecordModel';

@Injectable({
  providedIn: 'root'
})
export class PlayerRecordService {

  constructor( private http: HttpClient) { }

  playerRecordRecord(playerRecord:PlayerRecordModel) {
    return this.http.post<Number>(`${API_URL}/recordPlayerRecord`,playerRecord);
  }

  getPlayerRecord(selectedPlayerId: Number) {
    return this.http.get<PlayerRecordModel>(`${API_URL}/getPlayerRecord/${selectedPlayerId}`, {});
  }

}
