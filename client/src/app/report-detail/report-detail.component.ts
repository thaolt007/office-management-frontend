import { Component, OnInit,Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../models/user.model';
import { ReportTimesheetComponent } from '../report-timesheet/report-timesheet.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['userId','userName','totalMinute', 'checkIn', 'checkOut'];
   

  

  constructor(private userService: UserService, public dialog: MatDialog) {
    
   }

  ngOnInit() {
  }
  animal: string;
   
  openDialog(user): void {
    let dialogRef = this.dialog.open(Dialog, {
      width: '750px',height:'400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

export class UserDataSource extends DataSource<any> {

  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser().pipe(
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
export class Dialog {

  user: User;

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.user = data.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}