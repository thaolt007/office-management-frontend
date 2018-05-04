import { Component, OnInit,Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../models/user.model';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, PageEvent } from '@angular/material';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  dataSource: UserDataSource;
  displayedColumns = ['userId','userName','totalMinute','totalTime', 'checkIn', 'checkOut'];
  pageEvent = new PageEvent();
  pageSizeOptions = [5, 10, 25, 100];

  constructor(private userService: UserService, public dialog: MatDialog) {
    
   }

  ngOnInit() {
    this.pageEvent.length = 10;
    this.pageEvent.pageSize = 10;
    this.pageEvent.pageIndex = 0;
    this.dataSource  = new UserDataSource(this.userService, this.pageEvent);
  }
  animal: string;
   
  openDialog(user): void {
    console.log(user.totalTime);
    let dialogRef = this.dialog.open(ReportDetailDialog, {
      width: '750px',height:'400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.dataSource  = new UserDataSource(this.userService, this.pageEvent);
  }
}

export class UserDataSource extends DataSource<any> {

  constructor(private userService: UserService, private pageEvent: PageEvent) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser(this.pageEvent).pipe(
        map(res => this.addArrayIndex(res))
      );
  }

  disconnect() {}

  private addArrayIndex(users: User[]): User[] {
    return users.map((user, index) => this.addUserIndex(user, index));
  }

  private addUserIndex(user, index){
    user.index = index + 1;
    return  user;
  }

}
@Component({
  selector: 'dialog-report-timesheet',
  templateUrl: './report-detail-dialog.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailDialog {

  user: User;

  constructor(
    public dialogRef: MatDialogRef<ReportDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.user = data.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}