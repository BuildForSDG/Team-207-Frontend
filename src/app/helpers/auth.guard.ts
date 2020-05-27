import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from './../auth.service';

import { AccountService } from 'src/app/services/account.services';

@Injectable({
	providedIn: 'root'
})

//export class AuthGuard implements CanActivate {
//	constructor(
//		public authService: AuthService,
//		public router: Router
//	) {}

//	canActivate(
//		next: ActivatedRouteSnapshot,
//		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//		const user = this.authService.isLoggedIn;
//		if (user) {

//		this.authService.isLoggedIn() !== true;
//				window.alert("Access not allowed!");
//				this.router.navigate(['account/login'])
//				return true;
//		}
//}



export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
             //authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}