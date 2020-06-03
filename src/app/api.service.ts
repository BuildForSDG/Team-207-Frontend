import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { Policy } from './policy';
import { Observable } from 'rxjs';
import { User } from './models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applocation/json'})
};
const apiUrl = 'http://localhost:8001';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postUserUrl = 'http://localhost:8001/api/users/register';
//PHP_API_SERVER = "http://127.0.0.1:8001";

  constructor(private httpClient: HttpClient) { }

  postUser(firstname, lastname, username, email, password, confirm_password): Observable<any> {
    const uri = `${apiUrl + this.postUserUrl}`;
    const obj = {
      firstname: firstname,
      lastname: lastname,
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
