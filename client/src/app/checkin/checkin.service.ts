import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { Checkin } from './Checkin';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class CheckinService implements OnInit{

  ngOnInit() {}
  messageSource = new BehaviorSubject<boolean>(false);
  // doneCheckinMessage = this.messageSource.asObservable();

  apiCheckinUrl = 'http://localhost:8080/api/checkin/';
  constructor(private http: HttpClient) { }

  isCheckinDone(userId: number, date: Date): Observable<Checkin> {
    console.log('checkinService: func isCheckinDone');
    return this.http.post<Checkin>(this.apiCheckinUrl.concat('check/',userId.toString()), date, httpOptions).pipe();
  }
  
  saveCheckin(checkin: Checkin): Observable<Checkin> {
    console.log('checkinService: func saveCheckin');
    return this.http.post<Checkin>(this.apiCheckinUrl.concat('submit'), checkin, httpOptions).pipe();
  }

  changeMessage(doneCheckin: boolean) {
    this.messageSource.next(doneCheckin);
    console.log("checkinService: func changeMessage doneCheckin", doneCheckin);
  }
}
