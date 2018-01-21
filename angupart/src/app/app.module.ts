import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ImageUploadModule } from 'angular2-image-upload';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './services/user.service';
import { AdminComponent } from './admin/admin.component';
import { LoginFormComponent } from './admin/login-form/login-form.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { AuthguardGuard } from './authguard.guard';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { EditusersComponent } from './admin/editusers/editusers.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    LoginFormComponent,
    DashboardComponent,
    NavbarComponent,
    AllusersComponent,
    EditusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
