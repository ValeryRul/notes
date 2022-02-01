import { Injectable } from '@angular/core';
import { JwtResponse } from '@appModels/jwt-response.model';

const TOKEN_KEY = 'AuthToken';
const EXPIRATION_DATE_KEY = 'ExpirationDate';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  logout(): void {
    localStorage.clear();
  }

  saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
  
  saveExpirationDate(date: string): void {
    localStorage.removeItem(EXPIRATION_DATE_KEY);
    localStorage.setItem(EXPIRATION_DATE_KEY, date);
  }

  getExpirationDate(): string | null {
    return localStorage.getItem(EXPIRATION_DATE_KEY);
  }

  saveJwtResponse(jwtResponse: JwtResponse): void {
    this.saveExpirationDate(jwtResponse.expirationDate);
    this.saveToken(jwtResponse.token);
  }
}