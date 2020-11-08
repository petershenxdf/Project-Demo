import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http:HttpClient) { }

  getData(){
    let url='https://api.covidtracking.com/v1/states/current.json';
    return this.http.get<object[]>(url);
  }
}
