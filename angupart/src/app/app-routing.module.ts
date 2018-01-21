import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { LoginFormComponent } from './admin/login-form/login-form.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { EditusersComponent } from './admin/editusers/editusers.component';
import { AuthguardGuard } from './authguard.guard';

//constant for redirecting
const routes:Routes = [
  {path: '', component:UserComponent},
  {path: 'login', component:LoginFormComponent},
  {path: 'dashboard', canActivate: [AuthguardGuard], component:DashboardComponent},
  {path: 'allusers', canActivate: [AuthguardGuard], component:AllusersComponent},
  {path: 'edit/:id', canActivate: [AuthguardGuard], component:EditusersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
