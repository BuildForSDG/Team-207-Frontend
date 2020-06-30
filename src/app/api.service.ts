import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { HttpClientJsonpModule } from '@angular/common/http';
//import { Policy } from './policy';
import { Observable } from 'rxjs';
//import { User } from './models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const apiUrl = this.http.get('/api/v1/user')
              .map(res => res.json());

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postUserUrl = '"https://shielded-badlands-35399.herokuapp.com/';
//PHP_API_SERVER = "http://127.0.0.1:8001";

  constructor(private httpClient: HttpClient) { }

  postUser(first_name, last_name, username, email, password, confirm_password): Observable<any> {
    const uri = `${apiUrl + this.postUserUrl}`;
    const obj = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: password,
      confirm_password: confirm_password
    };
    return this.httpClient.post(uri, obj);
  }

  // getAPIAdata() {
  //   return this.http.get('/api/getData')
  // }

  // postAPIData() {
  //   return this.http.post('/api/postData', {})
  // }

}
