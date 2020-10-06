import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  getClubReport() {
    return this.http.get<any>(`${API_URL}/report/club`);
  }

  getClubPaymentReport(year) {
    return this.http.get<any>(`${API_URL}/report/club/payment/${year}`);
  }

  getTournamentReport(type) {
    return this.http.get<any>(`${API_URL}/report/tournament/${type}`);
  }

  getTournamentMatchPast(tournamentId) {
    return this.http.get<any>(`${API_URL}/report/tournament/match/${tournamentId}`);
  }

  getTournamentMatchFuture(tournamentId, type) {
    return this.http.get<any>(`${API_URL}/report/tournament/match/${tournamentId}/${type}`);
  }
}
