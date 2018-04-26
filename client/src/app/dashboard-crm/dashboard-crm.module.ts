import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';
import {CheckinComponent} from '../checkin/checkin.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { CheckinService } from '../checkin/checkin.service';
import { CheckoutService } from '../checkout/checkout.service';


export const appRoutes: Routes = [
    { path: '', component: DashboardCrmComponent },
    { path: 'checkin', component: CheckinComponent},
    { path: 'checkout', component: CheckoutComponent},
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
  declarations: [DashboardCrmComponent, CheckinComponent, CheckoutComponent],
  exports:[],
  providers: [CheckinService, CheckoutService]
})
export class DashboardCrmModule { }
