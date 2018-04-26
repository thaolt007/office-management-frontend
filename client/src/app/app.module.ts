import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//mới tạo
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
// import { MdInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';

import { CoreModule } from './core/core.module';
import { ReportDetailModule } from './report-detail/report-detail.module';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


import 'hammerjs';
import { CheckinComponent } from './checkin/checkin.component';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ReportDetailModule,
    
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule //mới tạo
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
