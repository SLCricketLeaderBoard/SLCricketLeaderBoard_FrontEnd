import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { RefereeModel } from '../../class-model/RefereeModel';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor( private http : HttpClient) { }


  getUser(email){
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }

  registerReferee(user:UserModel):Observable<UserModel>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.post<UserModel>(`${API_URL}/refereeRegister`,user,{headers,responseType:'text' as 'json'});
  }

  getAllReferees():Observable<RefereeModel[]>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<RefereeModel[]>(`${API_URL}/referees`,{headers});
  }

  getAvailableReferees(){
    return this.http.get<[RefereeModel]>(`${API_URL}/referee/available`);
  }

}
