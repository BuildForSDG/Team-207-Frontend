import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './policy';
import { Observable } from 'rxjs';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
PHP_API_SERVER = "http://127.0.0.1:8001";

  constructor(private httpClient: HttpClient) { }

}
