import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';
import {CheckinComponent} from '../checkin/checkin.component';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

export const appRoutes: Routes = [
    { path: '', component: DashboardCrmComponent },
    { path: 'checkin', component: CheckinComponent},
    // { path: 'checkout', component: CheckoutComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    DashboardWidgetModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
  ],
  declarations: [DashboardCrmComponent, CheckinComponent],
  exports:[]
})
export class DashboardCrmModule { }
