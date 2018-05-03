import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';

import { CoreModule } from './core/core.module';
import { ReportDetailModule } from './report-detail/report-detail.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';


import 'hammerjs';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckinService } from './checkin/checkin.service';
import { DialogCheckin } from './dashboard-crm/dashboard-crm.component';





@NgModule({
  declarations: [
    AppComponent,
    DialogCheckin
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReportDetailModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
  ],
  entryComponents: [DialogCheckin],
  providers: [UserService, CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
