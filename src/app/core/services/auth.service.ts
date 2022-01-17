import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserRegistrationModel } from '@appModels/user-registration.model';
import { UserLoginModel } from '@appModels/user-login.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage-service';
import { JwtResponse } from '@appModels/jwt-response.model';

const authUrls = {
  register: '/auth/registration',
  login: '/auth/login',
  logout: '/auth/logout'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private timer: any = null;

  constructor(private http: HttpClient, private router: Router, private tokenStorageService: TokenStorageService) {
    this.runExpirationTime();
  }

  register$(user: UserRegistrationModel): Observable<any> {
    return this.baseRequest$<UserRegistrationModel>(`${environment.url}${authUrls.register}`, user, 'Registration failed');
  }

  login$(user: UserLoginModel): Observable<unknown> {
    return this.baseRequest$<UserLoginModel>(`${environment.url}${authUrls.login}`, user, 'Login failed');
  }

  logout(): void {
    this.resetSession();
  }

  isLoggedIn(): boolean {
    return this.tokenStorageService.getExpirationDate ? Number(this.tokenStorageService.getExpirationDate()) - new Date().getTime() > 0 : false;
  }

  private baseRequest$<T>(url: string, payload: T, errorMessage: string): Observable<any> {
    return this.http.post<any>(url, payload).pipe(
      tap((jwtResponse: JwtResponse) => {
        if (jwtResponse) {
          this.setSession(jwtResponse);
        }
      })
    );
  }

  private setSession(jwtResponse: JwtResponse): void {
    this.tokenStorageService.saveJwtResponse(jwtResponse);
  }

  private runExpirationTime(): void {
    if (this.isLoggedIn()) {
      const duration = Number(this.tokenStorageService.getExpirationDate()) - new Date().getTime();      
      this.timer = setTimeout(() => {
        this.resetSession();
        this.router.navigateByUrl('/login');
      }, duration);
    }
  }

  private resetSession(): void {
    this.timer = null;
    this.tokenStorageService.logout();
  }
}
