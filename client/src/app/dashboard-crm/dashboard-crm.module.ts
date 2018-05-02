import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';
import {CheckinComponent} from '../checkin/checkin.component';
import { CheckoutComponent } from '../checkout/checkout.component';

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
    DashboardWidgetModule,
    FormsModule,
    AppMaterialModule
  ],
  declarations: [DashboardCrmComponent, CheckinComponent, CheckoutComponent],
  exports:[],
  providers: [
    CheckoutService
  ],
})
export class DashboardCrmModule { }
