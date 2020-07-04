import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { ManagerModel } from '../../class-model/ManagerModel';
import { Observable } from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})



export class ManagerService {

  constructor(private http: HttpClient, private afs: AngularFirestore) { }


  getUser(email) {
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }

  registerManager(user: UserModel): Observable<UserModel> {
    console.log(user.email);
    this.firebaseRegisterManager(user);
    return this.http.post<UserModel>(`${API_URL}/managerRegister`, user);
  }

  firebaseRegisterManager(user: UserModel) {
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

  getAllManagers(): Observable<ManagerModel[]> {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<ManagerModel[]>(`${API_URL}/managers`, { headers });
  }

  getAvailableManagers() {
    return this.http.get<[ManagerModel]>(`${API_URL}/manager/available`);
  }

  getManager(userId: Number) {
    return this.http.get<ManagerModel>(`${API_URL}/manager/${userId}`);
  }

}
