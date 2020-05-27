// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { Utils } from '../core/utils';
import { Constants } from '../core/constants';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  exports: [
    NavBarComponent, FooterComponent
  ],
  imports: [CommonModule, NgbModule, BrowserModule, RouterModule],
  providers: [Constants, Utils]
})
export class PartialsModule {}
