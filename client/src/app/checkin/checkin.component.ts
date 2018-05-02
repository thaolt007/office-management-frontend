import { Component, OnInit, Output, EventEmitter, OnDestroy  } from '@angular/core';
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

export class CheckinComponent implements OnInit, OnDestroy {


  constructor(private http: HttpClient, private checkinService: CheckinService) { }
  checkin: Checkin;
  timer = new Date();
  userId = 1;
  intervalId = 0;

  ngOnInit() {
    this.runClock();
    this.checkinService.isCheckinDone(this.userId, this.timer).subscribe(
      checkin => {
        this.checkin = checkin;
        this.checkinService.changeMessage(true);
      },
      error => console.log('oops error ', error.status)
    );
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  checkinSubmit(note: string): void {
    console.log('checkin.component checkinSubmit');
    this.checkin = new Checkin();
    this.checkin.note = note;
    this.checkin.createdDate = this.checkin.modifiedDate = new Date();
    this.checkin.userId = this.userId;

    this.checkinService.saveCheckin(this.checkin).subscribe(
      checkin => {
        this.checkin = checkin;
        this.checkinService.changeMessage(true);
      },
      error => console.log('oops error ', error.status)
    );
    console.log(note);
  }

  runClock(): void {
    this.intervalId = window.setInterval(() => { this.timer = new Date(); }, 1000);
  }
  
}
