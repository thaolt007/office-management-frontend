import { DialogCheckin } from './../dashboard-crm/dashboard-crm.component';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CheckinService } from '../checkin/checkin.service';
import { Checkin } from '../checkin/Checkin';
import { Checkout } from './Checkout';
import { CheckoutService } from './checkout.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  checkin: Checkin;
  checkout: Checkout;
  timer = new Date();
  userId = 1;
  intervalId = 0;

  constructor(private checkinService: CheckinService, private checkoutService: CheckoutService, public dialog: MatDialog) { }

  ngOnInit() {
    this.runClock();
    this.isCheckoutDone();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  checkoutSubmit(note: string): void {
    console.log('checkout.component checkoutSubmit');
    this.checkout = new Checkout();
    this.checkout.note = note;
    this.checkout.createdDate = this.checkout.modifiedDate = new Date();
    this.checkout.userId = this.userId;
    this.checkout.checkinId = this.checkin.id;

    this.checkoutService.saveCheckout(this.checkout).subscribe(
      checkout => this.checkout = checkout, 
      error => console.log('oops error ', error.status)
    );
  }

  runClock(): void {
    this.intervalId =  window.setInterval(() => { this.timer = new Date(); }, 1000);
  }

  isCheckoutDone() {
    this.checkinService.isCheckinDone(this.userId, this.timer).subscribe(
      checkin => {
        this.checkin = checkin;
        this.checkoutService.isCheckoutDone(this.checkin.id, this.timer).subscribe(
          checkout => this.checkout = checkout
        );
      },
      error => {
        console.log('oops error ', error.status);
        this.openDialog();
      }
    );
    
  }

  openDialog(): void{
    let dialogRef = this.dialog.open(DialogCheckin,
      {
        width: '250px'
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
