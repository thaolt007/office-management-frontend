import { Component, OnInit, Inject } from '@angular/core';
import { CheckinService } from '../checkin/checkin.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})
export class DashboardCrmComponent implements OnInit {
    userId = 1;
    checkined: boolean;
    public dashCard = [
        {colorDark: '#5C6BC0',colorLight: '#7986CB', number: 1221, title: 'SALES',icon:'local_grocery_store'},
        {colorDark: '#42A5F5',colorLight: '#64B5F6', number: 1221, title: 'LEADS',icon:'new_releases'},
        {colorDark: '#26A69A',colorLight: '#4DB6AC', number: 1221, title: 'ASSETS',icon:'assignments'},
        {colorDark: '#66BB6A',colorLight: '#81C784', number: 1221, title: 'BANKING',icon:'account_balance'}
    ]

    tableData = [
        { country: 'India', sales: 5400, percentage: '40%' },
        { country: 'Us', sales: 3200, percentage: '30.33%' },
        { country: 'Australia', sales: 2233, percentage: '18.056%' },
        { country: 'Spaim', sales: 600, percentage: '6%' },
        { country: 'China', sales: 200, percentage: '4.50%' },
        { country: 'Brazil', sales: 100, percentage: '2.50%' },
    ];

    constructor(private checkinService: CheckinService, public dialog: MatDialog) { }

    ngOnInit() {
        // console.log("ngOnInit Dashboard");
        this.checkinService.isCheckinDone(this.userId, new Date()).subscribe(
            checkin => {
                this.checkinService.changeMessage(true);
                this.checkined = true;
            },
            error => {
                this.checkined = false;
                this.openDialog();
            }
        );
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogCheckin, {
          width: '250px'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    template: `
    <h2 mat-dialog-title>You need checkin</h2>
    <button mat-button (click)="onCancle()" routerLink="/auth/dashboard/checkin">CheckIn</button>
    <button mat-button (click)="onCancle()">Cancle</button>
    `
  })
export class DialogCheckin {
  
    constructor(
      public dialogRef: MatDialogRef<DialogCheckin>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onCancle(): void {
      this.dialogRef.close();
    }
  
  }