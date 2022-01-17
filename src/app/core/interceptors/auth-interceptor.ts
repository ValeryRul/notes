import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage-service';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenStorageService: TokenStorageService) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
      let authRequest = httpRequest;
      const token = this.tokenStorageService.getToken();
      if (token != null) {
        authRequest = httpRequest.clone({ headers: httpRequest.headers.set(TOKEN_HEADER_KEY, token) });
      }
      return next.handle(authRequest);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];