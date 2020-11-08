import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }
  getData(){
    let url='https://api.covidtracking.com/v1/us/daily.json';
    return this.http.get<object[]>(url);
  }
}
