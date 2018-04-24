import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { CheckinService } from './checkin.service';
import { Checkin } from './Checkin';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})

export class CheckinComponent implements OnInit {

  constructor(private http: HttpClient, private checkinService: CheckinService) { }
  checkin: Checkin;
  timer = new Date();
  userId = 2;

  ngOnInit() {
    this.runClock();
    this.checkinService.isCheckinDone(this.userId, this.timer).subscribe(
      checkin => this.checkin = checkin, 
      error => console.log('oops error ', error.status)
    );
  }

  checkinSubmit(note: string): void {
    console.log('checkin.component checkinSubmit');
    this.checkin = new Checkin();
    this.checkin.note = note;
    this.checkin.createdDate = this.checkin.modifiedDate = new Date();
    this.checkin.userId = this.userId;

    this.checkinService.saveCheckin(this.checkin).subscribe(
      checkin => this.checkin = checkin, 
      error => console.log('oops error ', error.status)
    );
    console.log(note);
  }

  runClock(): void {
    setInterval(() => { this.timer = new Date(); }, 1000);
  }
  
}
