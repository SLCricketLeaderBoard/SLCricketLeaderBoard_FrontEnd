import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchType } from '../../class-model/MatchType';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http:HttpClient) { }


  getMatchType():Observable<MatchType[]>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<MatchType[]>(`${API_URL}/matchType`,{headers});
  }


}
