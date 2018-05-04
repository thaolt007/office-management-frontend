import { PageEvent } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class DashboardService {
  reports: User[];
  apiUrl = 'http://172.16.10.142:8080/api/main/timesheet';
  constructor(private http: HttpClient) { }

  getMainReport(userId: number, pageEvent: PageEvent): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiUrl}?size=${pageEvent.pageSize}&page=${pageEvent.pageIndex}`, {"userId": userId}, httpOptions).pipe();
  }
}
