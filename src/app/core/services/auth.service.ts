import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserRegistrationModel } from '@appModels/user-registration.model';
import { UserLoginModel } from '@appModels/user-login.model';

const authUrls = {
  register: '/auth/register',
  login: '/auth/login',
  logout: '/auth/logout'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: UserRegistrationModel): Observable<unknown> {
    return this.http.post(`${environment.url}${authUrls.register}`, user);
  }

  login(user: UserLoginModel): Observable<unknown> {
    return this.http.post(`${environment.url}${authUrls.login}`, user);
  }

  logout(): Observable<unknown> {
    return this.http.post(`${environment.url}${authUrls.logout}`, {});
  }
}
