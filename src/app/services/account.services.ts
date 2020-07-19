import { Inject, Injectable } from '@angular/core';
//import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(_userId: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${_userId}`);
    }

    update(_userId, params) {
        return this.http.put(`${environment.apiUrl}/users/${_userId}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (_userId == this.userValue._userId) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(_userId: string) {
        return this.http.delete(`${environment.apiUrl}/users/${_userId}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (_userId == this.userValue._userId) {
                    this.logout();
                }
                return x;
            }));
    }
    getUserProfile(_userId: string) {
		return this.http.get<User>(`${environment.apiUrl}/users/profile/${_userId}`)
	//  	map((res: Response) => {
	//  		return res || {}
	//  	}),
	//  	catchError(this.handleError)
	//    )
	}

	// handleError(error: HttpErrorResponse) {
	// 	let msg = '';
	// 	if (error.error instanceof ErrorEvent) {
	// 		// client-error
	// 		msg = error.error.message;
	// 	} else {
	// 		// server-side error
	// 		msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
	// 	}
	// 	return throwError(msg);
	//   }
}