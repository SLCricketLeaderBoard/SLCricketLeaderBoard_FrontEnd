import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { BallerTypeModel } from '../../class-model/BallerTypeModel';

@Injectable({
  providedIn: 'root'
})
export class BallerTypeService {

  constructor(
    private http: HttpClient
  ) { }

  getBallerTypeList() {
    return this.http.get<BallerTypeModel[]>(`${API_URL}/ballertype`);
  }
}
