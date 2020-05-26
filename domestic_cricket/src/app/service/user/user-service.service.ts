import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http : HttpClient
  ) { }

  getUser(email){
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }


  getUserByUserId(userId:String){
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<UserModel>(`${API_URL}/profile/${userId}`,{headers});
  }

  
}
