import { Injectable } from '@angular/core';
import { StadiumModel } from '../../class-model/StadiumModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  constructor(
    private http : HttpClient
  ) { }

  registerStadium(stadium : StadiumModel){
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.post<Number>(`${API_URL}/stadium`,stadium,{headers,responseType:'text' as 'json'});
  }

  getAllStadiums():Observable<StadiumModel[]>{
    let jwt = sessionStorage.getItem('TOKEN');
    const headers = new HttpHeaders().set('Authorization',jwt);
    return this.http.get<StadiumModel[]>(`${API_URL}/stadiums`,{headers});
  }

  
}
