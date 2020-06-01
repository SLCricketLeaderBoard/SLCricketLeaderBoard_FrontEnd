import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { UmpireModel } from '../../class-model/UmpireModel';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UmpireService {

  constructor( private http : HttpClient) { }


  getUser(email){
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }

  registerManager(user:UserModel):Observable<UserModel>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.post<UserModel>(`${API_URL}/umpireRegister`,user,{headers,responseType:'text' as 'json'});
  }

  getAllManagers():Observable<UmpireModel[]>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<UmpireModel[]>(`${API_URL}/umpires`,{headers});
  }

  getAvailableManagers(){
    return this.http.get<[UmpireModel]>(`${API_URL}/umpire/available`);
  }

}
