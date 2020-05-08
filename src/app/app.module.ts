import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import { Utils } from './core/utils';
import { Constants } from './core/constants';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PartialsModule,
    SharedModule
  ],
  providers: [Constants, Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }
