import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
