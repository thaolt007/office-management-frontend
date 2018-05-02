import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// import { Ng2PageTransitionModule } from "ng2-page-transition";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { CoreModule } from '../core/core.module';
import {CheckinComponent} from '../checkin/checkin.component';

export const appRoutes: Routes = [{
      path: '', component: AuthComponent,
      children: [
        {path: 'dashboard', loadChildren: '../dashboard-crm/dashboard-crm.module#DashboardCrmModule'},
        {path: 'dashboard-account', loadChildren: '../dashboard-accounts/dashboard-accounts.module#DashboardAccountsModule'},
        {path: 'report-detail', loadChildren: '../report-detail/report-detail.module#ReportDetailModule'},
        
      ]}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    CoreModule,
    PerfectScrollbarModule,
    AppMaterialModule
    // Ng2PageTransitionModule
  ],
  declarations: [AuthComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AuthModule { }
