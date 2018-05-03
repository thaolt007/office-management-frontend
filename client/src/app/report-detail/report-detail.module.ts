import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDetailComponent, ReportDetailDialog } from './report-detail.component';
import { RouterModule, Routes } from '@angular/router'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appRoutes: Routes = [
    { path: '', component: ReportDetailComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule.forChild(appRoutes),
    
  ],
  declarations: [ReportDetailComponent, ReportDetailDialog],
  entryComponents: [ReportDetailComponent, ReportDetailDialog],
  // exports:[ReportDetailComponent]
})
export class ReportDetailModule { }