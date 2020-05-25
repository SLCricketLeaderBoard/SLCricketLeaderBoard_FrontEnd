import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { ManagerModel } from '../../class-model/ManagerModel';
import { Observable } from 'rxjs';

export interface User{
   userId:Number,
   userName:String,
   fullName:String,
   nameWithInitial:String,
   nic:String,
   contactNumber:String,
   role:Number,
   email:String,
   password:String,
   address:String,
   regDate:Date
}

export interface Manager{
  managerId: String;
  userId: User;
}


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor( private http : HttpClient) { }


  getUser(email){
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }

  registerManager(user:UserModel):Observable<UserModel>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.post<UserModel>(`${API_URL}/managerRegister`,user,{headers,responseType:'text' as 'json'});
  }

  getAllManagers():Observable<Manager[]>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<Manager[]>(`${API_URL}/managers`,{headers,responseType:'text' as 'json'});
  }

}
