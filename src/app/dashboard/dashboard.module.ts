import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboardlayout.component';
import { DashboardComponent } from './dashboard.component';
//import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DashboardRoutingModule,
        RouterModule,
        RouterTestingModule
    ],
    declarations: [
        DashboardLayoutComponent,
        DashboardComponent
      // RegisterComponent
    ]
})
export class DashboardModule { }