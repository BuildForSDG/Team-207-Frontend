import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './account/layout.component';
import { LuiLayoutComponent } from './luihome/luilayout.component';
import { LuiHomeComponent } from './luihome/luihome.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent }from './account/register.component';
import { AccountRoutingModule } from './account/account-routing.module';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //{ path: '**',
  //  redirectTo: '',
  //  pathMatch: 'full'
  //},
  // {
	//   path: 'register',
	//   component: RegisterComponent
  // },
  // {
	//   path: '',
	//   redirectTo: '/register',
	//   pathMatch: 'full'
  // },
  {
    path: '', component: LayoutComponent,
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]
},
{
  path: '', component: LuiLayoutComponent,
  children: [
      { path: 'luihome', component: LuiHomeComponent }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
