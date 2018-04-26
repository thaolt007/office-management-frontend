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
import { CheckinComponent } from './checkin/checkin.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule //mới tạo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
