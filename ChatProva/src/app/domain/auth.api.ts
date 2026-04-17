import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { RegisterDto } from './interfaces/registerInterface';
import { LoginDto } from './interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class AuthApi extends Api {
  login = (data: LoginDto) : Observable<string> => {
    return this.client.post<string>(`${this.URL}/auth/login`, data).pipe();
  }
  subscribe = (data: RegisterDto): Observable<string> => {
    return this.client.post<string>(`${this.URL}/auth/subscribe`, data).pipe()
  }
}
