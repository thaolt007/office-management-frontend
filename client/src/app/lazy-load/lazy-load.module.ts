import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';
import {CheckinComponent} from '../checkin/checkin.component';

const routes: Routes = [
    {path: 'auth', loadChildren: '../auth/auth.module#AuthModule'},
    {path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    {path: 'login', loadChildren: '../login/login.module#LoginModule'},
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},
    {path: '**', redirectTo: 'auth/dashboard'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    entryComponents: []
})
export class LazyLoadModule { }
