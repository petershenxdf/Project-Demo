import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export class Info {
  date: number;
  state: string;
  positive: number;
  // probableCases: object;
  negative: number;
  // completed: boolean;
  death: number;
  recovered: number;
}

// has to be connect to inject class !
@Injectable({
  providedIn: 'root'
})
export class TableService {
  url = 'https://api.covidtracking.com/v1/states/current.json';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Info[]> {
   return this.httpClient.get<Info[]>(this.url);
  }

}
