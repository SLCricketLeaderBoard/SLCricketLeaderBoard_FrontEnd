import { Injectable } from '@angular/core';
import { TournamentModel } from '../../class-model/TournamentModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor( private http : HttpClient) { }

  registerTournament(stadium : TournamentModel){
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.post<TournamentModel>(`${API_URL}/registerTournament`,stadium,{headers,responseType:'text' as 'json'});
  }

  getTournaments():Observable<TournamentModel[]>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<TournamentModel[]>(`${API_URL}/tournaments`,{headers});
  }

  

  getTournamentById(tournamentId:Number):Observable<TournamentModel>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<TournamentModel>(`${API_URL}/tournament/${tournamentId}`,{headers});
  }
}
