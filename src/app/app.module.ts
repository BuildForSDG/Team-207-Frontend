import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {bandiBackendProvider } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
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
import { LuiHomeComponent } from './luihome/luihome.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    RegisterComponent,
    LuiHomeComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PartialsModule,
    ReactiveFormsModule,
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
