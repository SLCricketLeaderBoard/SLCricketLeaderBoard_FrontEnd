import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { UmpireModel } from '../../class-model/UmpireModel';
import { Observable } from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore";



@Injectable({
  providedIn: 'root'
})
export class UmpireService {

  constructor( private http : HttpClient, private afs: AngularFirestore) { }


  getUser(email){
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }

  registerUmpire(user:UserModel):Observable<UserModel>{
    this.firebaseRegisterUmpire(user);
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.post<UserModel>(`${API_URL}/umpireRegister`,user,{headers,responseType:'text' as 'json'});
  }

  firebaseRegisterUmpire(user:UserModel){
    console.log(user);
    let users = {};
    users['address'] = user.address;
    users['contactNumber'] = user.contactNumber;
    users['email'] = user.email;
    users['fullName'] = user.fullName;
    users['nameWithInitial'] = user.nameWithInitial;
    users['nic'] = user.nic;
    users['password'] = user.password;
    users['regDate'] = user.regDate;
    users['role'] = user.role;
    users['userId'] = user.userId;
    users['userName'] = user.userName;
    users['profileImage'] = user.profileImage;
    return this.afs.collection('users').doc(user.nic.toString()).set(users);

  }

  getAllUmpires():Observable<UmpireModel[]>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<UmpireModel[]>(`${API_URL}/umpires`,{headers});
  }

  getAvailableUmpires(){
    return this.http.get<[UmpireModel]>(`${API_URL}/umpire/available`);
  }

}
