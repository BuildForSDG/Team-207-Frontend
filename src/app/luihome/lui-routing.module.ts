import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuiLayoutComponent } from './luilayout.component';
import { LuiHomeComponent } from './luihome.component';

const routes: Routes = [
    {
        path: '', component: LuiLayoutComponent,
        children: [
            { path: 'luihome', component: LuiHomeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LuiRoutingModule { }