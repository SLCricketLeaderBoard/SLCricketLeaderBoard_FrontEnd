import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { UserModel } from '../../class-model/UserModel';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient, private afs: AngularFirestore
  ) { }

  getUser(email) {
    return this.http.get<UserModel>(`${API_URL}/user/${email}`);
  }


  getUserByUserId(userId: String) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.get<UserModel>(`${API_URL}/profile/${userId}`, { headers });
  }

  resetPassword(user: UserModel) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);

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
    this.afs.collection('users').doc(user.nic.toString()).set(users).then(() => {
      console.log("Reset on firebase");

    }, error => {
      console.log(error);

    })

    return this.http.post<String>(`${API_URL}/user/resetPassword`, user, { headers, responseType: 'text' as 'json' });


  }

  updateUserProfile(user: UserModel) {
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);

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

    this.afs.collection('users').doc(user.nic.toString()).update(users).then(() => {
      console.log("Reset on firebase");
    }, error => {
      console.log(error);
    })


    return this.http.post<String>(`${API_URL}/user/updateProfile`, user, { headers, responseType: 'text' as 'json' });

  }

  userAccountDeactivate(userId: Number) {
    return this.http.put<Number>(`${API_URL}/user/deactivate/${userId}`, {});
  }

  updateUserState(user:UserModel){
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization', jwt);
    return this.http.post<String>(`${API_URL}/user/updateProfile`,user,{ headers, responseType: 'text' as 'json' });
  }

}
