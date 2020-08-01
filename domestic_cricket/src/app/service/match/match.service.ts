import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchType } from '../../class-model/MatchType';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { MatchModel } from '../../class-model/MatchModel';
import { AngularFirestore } from "@angular/fire/firestore";
import { PlayerModel } from '../../class-model/PlayerModel';
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient, private afs: AngularFirestore) { }


  getMatchType(): Observable<MatchType[]> {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchType[]>(`${API_URL}/matchType`, { headers });
  }

  createMatch(match: MatchModel): Observable<MatchModel> {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.post<MatchModel>(`${API_URL}/createMatch`, match, { headers });
  }

  getMatchesByTournamentId(tournamentId: number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchModel[]>(`${API_URL}/matches/${tournamentId}`, { headers });
  }


  //firebase Create match
  createMatchInfirebase(match: MatchModel) {
    return this.afs.collection('tournaments').doc(`${match.tournamentId.tournamentId}`).collection('matches').doc(`${match.matchId}`).set(match);
  }

  getMatchById(matchId: Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchModel>(`${API_URL}/match/${matchId}`, { headers });

  }

  getSelectedPlayerForMatch(matchId: Number, clubId: Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<PlayerModel[]>(`${API_URL}/match/players/${matchId}/${clubId}`, { headers });
  }

  getPlayedMatches(tournamentId: Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchModel[]>(`${API_URL}/playedMatches/${tournamentId}`, { headers });
  }

  getToPlayMatches(tournamentId: Number) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchModel[]>(`${API_URL}/toPlayMatches/${tournamentId}`, { headers });
  }


  getPlayedMatchList(clubId: Number) {
    return this.http.get<MatchModel[]>(`${API_URL}/match/played/${clubId}`, {});
  }

  getRefereeMatchesUpcomming(tournamentId: Number, refereeId: String) {
    let x: Number = +refereeId;
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchModel[]>(`${API_URL}/refereeMatchesUpcomming/${tournamentId}/${x}`, { headers });
  }


  getRefereeMatchesPlayed(tournamentId: Number, refereeId: String) {
    let x: Number = +refereeId;
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchModel[]>(`${API_URL}/refereeMatchesPlayed/${tournamentId}/${x}`, { headers });
  }

  getRefereeMatchesPlayedUpdated(tournamentId: Number, refereeId: String) {
    let x: Number = +refereeId;
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<MatchModel[]>(`${API_URL}/refereeMatchesPlayedUpdated/${tournamentId}/${x}`, { headers });
  }

  updateMatch(match: MatchModel): Observable<MatchModel> {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.post<MatchModel>(`${API_URL}/updateMatch`, match, { headers });
  }

  getUpcomingMatchList(clubId: Number) {
    return this.http.get<MatchModel[]>(`${API_URL}/match/upcoming/${clubId}`, {});
  }

  getLivetodayMatchForReferee(refereeId:String){
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<MatchModel[]>(`${API_URL}/getLiveMatchTodayForReferee/${refereeId}`,{headers});
  }

}
