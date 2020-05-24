import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor( private http : HttpClient) { }


  getUser(email){
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }

  registerManager(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${API_URL}/managerRegister`,user);
  }

}
