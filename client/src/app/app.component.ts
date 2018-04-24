import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ReportTimesheetComponent} from './report-timesheet/report-timesheet.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  

})
export class AppComponent {
  title = 'app';
  getRouteAnimation(outlet) {
      
      return outlet.activatedRouteData.animation
  }
  constructor(public dialog: MatDialog) {}

  public openModal() {
    this.dialog.open(ReportTimesheetComponent, { data: { name: 'angular lessons' } });
  }
}
