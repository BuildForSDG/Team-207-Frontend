import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LuiRoutingModule } from './lui-routing.module';
import { LuiLayoutComponent } from './luilayout.component';
import { LuiHomeComponent } from './luihome.component';
//import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LuiRoutingModule,
        RouterModule,
        RouterTestingModule
    ],
    declarations: [
        LuiLayoutComponent,
        LuiHomeComponent
      // RegisterComponent
    ]
})
export class LuiModule { }