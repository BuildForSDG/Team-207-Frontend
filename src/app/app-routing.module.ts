import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './account/layout.component';
import { DashboardLayoutComponent } from './dashboard/dashboardlayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { AccountRoutingModule } from './account/account-routing.module';
import { AuthGuard } from './helpers/auth.guard';
import { UserProfileComponent }  from './user-profile/user-profile.component';

//const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
//const usersModule = () => import('./users/users.module').then(x => x.UsersModule);



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
     {
       path: 'account', component: LayoutComponent,
        children: [
           { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent }
        ]
      },
    {
      path: '',
      redirectTo: 'register',
      pathMatch: 'full'
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
     {
	     path: '', component: DashboardLayoutComponent,
	      children: [
        { path: 'dashboard', component: DashboardComponent }
      ]
     },
   {	path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
