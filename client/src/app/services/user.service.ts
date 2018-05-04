import { PageEvent } from '@angular/material';
import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private serviceUrl = 'http://172.16.10.142:8080/api/report';
  private a;
  constructor(private http: HttpClient) { }

  getUser(pageEvent: PageEvent): Observable<User[]> {
    return this.http.get<User[]>(`${this.serviceUrl}?size=${pageEvent.pageSize}&page=${pageEvent.pageIndex}`).pipe(
				map(res => this.parseUsersResponse(res["content"])
			)
    	);
  }

	private parseUsersResponse(users: User[]): User[] {
		return  users.map( user => this.parseUserResponse(user));
	}

	private parseUserResponse(user: User): User {
		user.totalTime = new Date(0, 0, 0, 0, 0, 0, 0);
		
		user.totalTime.setMinutes(user.totalMinute);
		return  user;
	}
}