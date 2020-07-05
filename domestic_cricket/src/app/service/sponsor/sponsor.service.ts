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
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }

 

 getNonregsponsors(){
  //console.log(this.http.get<SponsorModel[]>(`${API_URL}/nonregsponsors`));
  return this.http.get<SponsorModel[]>(`${API_URL}/nonregsponsors`);
    
}
   

}