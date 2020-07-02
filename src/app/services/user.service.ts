import { Injectable } from '@angular/core';
import { User } from'./user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	selectedUser: User = {
		first_name: '',
		last_name: '',
		userbane: '',
		enail: '',
		password: ''
	};

  constructor(privaye http: HttpClient) { }
  
  postUser(user:User) {
	  return this.http.post(environment.apiBaseUrl+ '/register' ,user)
  }
  
  login(authCredentials) {
	  return this.http.post(environment.apiBaseUrl+ '/authenticate' ,authCredentials)
  }
  
  setToken(token:string) {
	  localStorage.setItem('token', token)
  }
}
