import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClubRankingModel } from '../../class-model/ClubRankingModel';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ClubRankingService {

  constructor(
    private http: HttpClient
  ) { }

  getClubRanking(matchType: Number) {
    return this.http.get<ClubRankingModel[]>(`${API_URL}/clubranking/${matchType}`, {})
  }
}
