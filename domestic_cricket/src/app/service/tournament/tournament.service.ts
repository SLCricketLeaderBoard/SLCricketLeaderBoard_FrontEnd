import { Injectable } from '@angular/core';
import { TournamentModel } from '../../class-model/TournamentModel';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private http : HttpClient
  ) { }

  registerTournament(tournament : TournamentModel){
    return this.http.post<Number>(`${API_URL}/tournament`,tournament);
  }

  updateTournament(tournament : TournamentModel){
    return this.http.put<Number>(`${API_URL}/tournament`,tournament;
  }

  getTournament(status:Number){
    return this.http.get<TournamentModel[]>(`${API_URL}/tournament/list/${status}`,{});
  }

  getTournamentData(tournamentId:Number){
    return this.http.get<TournamentModel>(`${API_URL}/tournament/${tournamentId}`,{});
  }

 
  
}
