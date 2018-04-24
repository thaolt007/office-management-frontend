import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportTimesheetComponent, Dialog } from '../report-timesheet/report-timesheet.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
export const appRoutes: Routes = [
  { path: '', component: ReportTimesheetComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule.forChild(appRoutes),
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [ReportTimesheetComponent, Dialog],
  entryComponents: [ReportTimesheetComponent, Dialog],
  exports: [ReportTimesheetComponent, Dialog]
})
export class ReportTimesheetModule { }