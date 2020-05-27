import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {bandiBackendProvider } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import { Utils } from './core/utils';
import { Constants } from './core/constants';
import { JwtInterceptor } from './helpers';
import { ErrorInterceptor }  from './helpers';
import { AlertComponent } from './components';
import { LoginComponent } from './account/login.component';
import { LayoutComponent } from './account/layout.component';
import { RegisterComponent }  from './account/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountRoutingModule,
    NgbModule,
    PartialsModule,
    ReactiveFormsModule,
	  FormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    Constants, Utils,

    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create app backend

    bandiBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
//export * from './luihome/luihome.component';
// export * from './helpers';
