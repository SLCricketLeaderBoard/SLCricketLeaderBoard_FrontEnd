import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SponsorsignupModel } from '../../class-model/SponsorSignup.Model';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SponsorSignupService {

  constructor(
    private http: HttpClient
  ) { }

  sponsorSignup(sponsorSignup: SponsorsignupModel) {
    return this.http.post<Number>(`${API_URL}/sponsorsignup`, sponsorSignup);
  }

//   getPlayer(playerId: Number) {
//     return this.http.get<PlayerModel>(`${API_URL}/player/${playerId}`, {});
//   }

//   playerAccountDeactivate(playerId: Number) {
//     return this.http.put<Number>(`${API_URL}/player/deactivate/${playerId}`, {});
//   }

}
