import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

class Checkin {
  id: number;
  note: string;
  createdDate: Date;
  modifiedDate: Date;
  userId: number;
  // constructor(id, date, note) {
  //   this.id = id;
  //   this.dateCheckin = date;
  //   this.noteCheckin = note;
  // }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})

export class CheckinComponent implements OnInit {
  apiCheckinUrl = 'http://172.16.10.142:8080/api/checkin/';
  constructor(private http: HttpClient) { }
  checkin: Checkin;
  timer = new Date();
  userId = 2;
  ngOnInit() {
    this.runClock();
    this.isCheckinDone().subscribe(checkin => this.checkin = checkin, error => console.log('oops error ', error.status));
    console.log(this.timer);
  }
  checkinSubmit(note: string): void {
    console.log('click checkin');
    this.checkin = new Checkin();
    this.checkin.note = note;
    this.checkin.createdDate = this.checkin.modifiedDate = new Date();
    this.checkin.userId = this.userId;
    this.saveCheckin(this.checkin).subscribe(checkin => this.checkin = checkin, error => console.log('oops error ', error.status));
    console.log(note);
  }
  runClock(): void {
    setInterval(() => { this.timer = new Date(); }, 1000);
  }
  isCheckinDone(): Observable<Checkin> {
    // return this.http.post<Checkin>(this.apiCheckinUrl, this.timer, httpOptions);
    console.log('isCheckinDone');
    return this.http.post<Checkin>(this.apiCheckinUrl.concat('check/',this.userId.toString()), this.timer, httpOptions).pipe();
  }
  saveCheckin(checkin: Checkin): Observable<Checkin> {
    console.log('saveCheckin');
    return this.http.post<Checkin>(this.apiCheckinUrl.concat('submit'), checkin, httpOptions).pipe();
  }
  
}
