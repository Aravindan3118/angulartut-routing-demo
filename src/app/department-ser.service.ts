import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { departmentI } from './departmentinter';

@Injectable({
  providedIn: 'root'
})
export class DepartmentSerService {
  private _url: string = "/assets/data/departmentdata.json"
  constructor(private http: HttpClient) { }
  getDepartment(): Observable<departmentI[]>{
    return this.http.get<departmentI[]>(this._url);
  }
}
