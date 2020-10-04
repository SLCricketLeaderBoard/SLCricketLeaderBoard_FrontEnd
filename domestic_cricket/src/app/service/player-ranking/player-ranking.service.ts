import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BatmanScoreModel } from '../../class-model/BatmanScoreModel';
import { API_URL } from '../../app.constants';
import { BallerScoreModel } from '../../class-model/BallerScoreModel';
import { FieldingScoreModel } from '../../class-model/FieldingScoreModel';
import { ClubModel } from '../../class-model/ClubModel';

@Injectable({
  providedIn: 'root'
})
export class PlayerRankingService {

  constructor(private http: HttpClient) { }

  getTopBallersOneDay() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/playeRanking/topBallersOneDay`,{});
  }

  getTopBallers34Days() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/playeRanking/topBallers34Days`,{});
  }

  getTopBallersT20() {
    return this.http.get<BallerScoreModel[]>(`${API_URL}/playeRanking/topBallersT20`,{});
  }

  getTopBatmenOneDay() {
    return this.http.get<BatmanScoreModel[]>(`${API_URL}/playeRanking/topBatmenOneDay`,{});
  }

  getTopBatmen34Days() {
    return this.http.get<BatmanScoreModel[]>(`${API_URL}/playeRanking/topBatmen34Days`,{});
  }

  getTopBatmenT20() {
    return this.http.get<BatmanScoreModel[]>(`${API_URL}/playeRanking/topBatmenT20`,{});
  }

  getTopFilderOneDay() {
    return this.http.get<FieldingScoreModel[]>(`${API_URL}/playeRanking/topFilderOneDay`,{});
  }

  getTopFilder34Days() {
    return this.http.get<FieldingScoreModel[]>(`${API_URL}/playeRanking/topFilder34Days`,{});
  }

  getTopFilderT20() {
    return this.http.get<FieldingScoreModel[]>(`${API_URL}/playeRanking/topFilderT20`,{});
  }

  getClubDataForPublic(clubId:Number){
    return this.http.get<ClubModel>(`${API_URL}/playeRanking/club/${clubId}`,{});
  }
}
