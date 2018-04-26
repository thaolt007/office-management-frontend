import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Checkin } from './Checkin';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class CheckinService {
  apiCheckinUrl = 'http://172.16.10.142:8080/api/checkin/';
  constructor(private http: HttpClient) { }

  isCheckinDone(userId: number, date: Date): Observable<Checkin> {
    console.log('isCheckinDone');
    return this.http.post<Checkin>(this.apiCheckinUrl.concat('check/',userId.toString()), date, httpOptions).pipe();
  }
  
  saveCheckin(checkin: Checkin): Observable<Checkin> {
    console.log('saveCheckin');
    return this.http.post<Checkin>(this.apiCheckinUrl.concat('submit'), checkin, httpOptions).pipe();
  }
}
