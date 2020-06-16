import { Injectable } from '@angular/core';
import { StadiumModel } from '../../class-model/StadiumModel';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  constructor(
    private http : HttpClient
  ) { }

  registerStadium(stadium : StadiumModel){
    return this.http.post<Number>(`${API_URL}/stadium`,stadium);
  }
  
}
