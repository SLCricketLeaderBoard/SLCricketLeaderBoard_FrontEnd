import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchScorePredictionModel } from '../../class-model/MatchScorePredictionModel';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LiveScorePredictionService {

  constructor(
    private http: HttpClient
  ) { }

  getLiveScore(score: MatchScorePredictionModel) {
    return this.http.post<Number>(`http://127.0.0.1:5000/results`, score);
  }

}
