import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { SponsorModel } from '../../class-model/SponsorModel';
//import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor( private http : HttpClient) { }


  getUser(email){
    return this.http.get<SponsorModel[]>(`${API_URL}/user/${email}`);
  }

 

 getNonregsponsors(){
  //console.log(this.http.get<SponsorModel[]>(`${API_URL}/nonregsponsors`));
  return this.http.get<SponsorModel[]>(`${API_URL}/nonregsponsors`);
    
}

getregsponsors(){
  //console.log(this.http.get<SponsorModel[]>(`${API_URL}/nonregsponsors`));
  return this.http.get<SponsorModel[]>(`${API_URL}/regsponsors`);
    
}

sponsorAccept(userId: Number) {
  return this.http.put<Number>(`${API_URL}/sponsorAccept/${userId}`, {});
}

  sponsorClubRequest(sponsorId,clubId){
    console.log(sponsorId);
    console.log(clubId);
    return this.http.post<Boolean>(`${API_URL}/sponsorclubrequest/${sponsorId}/${clubId}`, {});

  }
  
  getclubsponsor(userId: Number){
    //console.log(this.http.get<SponsorModel[]>(`${API_URL}/nonregsponsors`));
    console.log(userId);
    return this.http.get<SponsorModel[]>(`${API_URL}/getclubsponsor/${userId}`);
      
  }

}