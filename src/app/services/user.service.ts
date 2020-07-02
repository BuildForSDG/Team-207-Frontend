import { Injectable } from '@angular/core';
import { User } from '.././models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	selectedUser: User = {
		id:'',
		first_name: '',
		last_name: '',
		username: '',
		email: '',
		password: '',
		token: ''
	};

  constructor(private http: HttpClient) { }

  postUser(user:User) {
	  return this.http.post(environment.apiUrl+ '/register' ,user)
  }

  login(authCredentials) {
	  return this.http.post(environment.apiUrl+ '/authenticate' ,authCredentials)
  }

  setToken(token:string) {
	  localStorage.setItem('token', token)
  }
}
