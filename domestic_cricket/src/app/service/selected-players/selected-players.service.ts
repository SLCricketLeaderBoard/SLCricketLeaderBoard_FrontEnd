import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
import { SelectedPlayerModel } from '../../class-model/SelectedPlayerModel';

@Injectable({
  providedIn: 'root'
})
export class SelectedPlayersService {

  constructor( private http: HttpClient) { }

  getSelectedPlayers(matchId: Number, clubId: Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<SelectedPlayerModel[]>(`${API_URL}/match/selectedPlayers/${matchId}/${clubId}`, { headers });
  }

  getSelectedPlayerById(id:Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<SelectedPlayerModel>(`${API_URL}/selectedPlayer/${id}`, { headers });
  }

  getSelectedPlayersUpdated(matchId: Number, clubId: Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<SelectedPlayerModel[]>(`${API_URL}/match/selectedPlayersUpdated/${matchId}/${clubId}`, { headers });
  }

  getSelectedPlayersNotUpdated(matchId: Number, clubId: Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<SelectedPlayerModel[]>(`${API_URL}/match/selectedPlayersNotUpdated/${matchId}/${clubId}`, { headers });
  }

  
}
