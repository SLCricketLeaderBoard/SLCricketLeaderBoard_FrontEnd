import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';

@Injectable({
  providedIn: 'root'
})
export class PlayerRankingService {

  constructor(private http: HttpClient) { }

  getTopBallersOneDay() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topBallersOneDay`,{});
  }

  getTopBallers34Days() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topBallers34Days`,{});
  }

  getTopBallersT20() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topBallersT20`,{});
  }

  getTopBatmenOneDay() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topBatmenOneDay`,{});
  }

  getTopBatmen34Days() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topBatmen34Days`,{});
  }

  getTopBatmenT20() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topBatmenT20`,{});
  }

  getTopFilderOneDay() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topFilderOneDay`,{});
  }

  getTopFilder34Days() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topFilder34Days`,{});
  }

  getTopFilderT20() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/topFilderT20`,{});
  }
}
