import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatmanTypeModel } from '../../class-model/BatmanTypeModel';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BatmanTypeService {

  constructor(
    private http: HttpClient
  ) { }

  getBatmanTypeList() {
    return this.http.get<BatmanTypeModel[]>(`${API_URL}/batmantype`, {});
  }
}
