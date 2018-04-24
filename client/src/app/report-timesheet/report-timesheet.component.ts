import { Component, OnInit,Inject,ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../models/user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-report-timesheet',
  templateUrl: './report-timesheet.component.html',
  styleUrls: ['./report-timesheet.component.scss'],
   
})
export class ReportTimesheetComponent implements OnInit {
	animal: string;
  	name: string;
    
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

  
  
}
@Component({
  selector: 'dialog-report-timesheet',
  templateUrl: 'report-timesheet-dialog.component.html',
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}