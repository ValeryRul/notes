import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserRegistrationModel } from '@appModels/user-registration.model';
import { UserLoginModel } from '@appModels/user-login.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const authUrls = {
  register: '/auth/register',
  login: '/auth/login',
  logout: '/auth/logout'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly key = 'expirationDate';
  private readonly session_termin = 43200 * 1000;
  private timer: any = null;

  constructor(private http: HttpClient, private router: Router) {
    this.runExpirationTime();
  }

  register(user: UserRegistrationModel): Observable<any> {
    return this.baseRequest<UserRegistrationModel>(`${environment.url}${authUrls.register}`, user, 'Registration failed');
  }

  login(user: UserLoginModel): Observable<unknown> {
    return this.baseRequest(`${environment.url}${authUrls.login}`, user, 'Login failed');
  }

  logout(): Observable<unknown> {
    return this.baseRequest(`${environment.url}${authUrls.logout}`, {}, 'Logout failed').pipe(
      tap(() => {
        this.resetSession();
      })
    );
  }

  isLoggedIn(): boolean {
    return true;
    // return localStorage.getItem(this.key) ? Number(localStorage.getItem(this.key)) - new Date().getTime() > 0 : false;
  }

  private baseRequest<T>(url: string, payload: T, errorMessage: string): Observable<any> {
    return this.http.post<any>(url, payload).pipe(
      tap(({ status }) => {
        if (status === 'success') {
          this.setExpirationDate();
          this.runExpirationTime();
        } else {
          throw Error(errorMessage);
        }
      })
    );
  }

  private setExpirationDate(): void {
    const value = new Date().getTime() + this.session_termin;
    localStorage.setItem(this.key, value.toString());
  }

  private runExpirationTime(): void {
    if (this.isLoggedIn()) {
      const duration = Number(localStorage.getItem(this.key)) - new Date().getTime();
      this.timer = setTimeout(() => {
        this.router.navigateByUrl('/login');
        this.resetSession();
      }, duration);
    }
  }

  private resetSession(): void {
    this.timer = null;
    localStorage.removeItem(this.key);
  }
}
