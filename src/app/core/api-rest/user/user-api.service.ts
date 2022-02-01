import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/core/types/user-api.types';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserApiService{
  constructor(private http: HttpClient){}

  getUserInfo$(): Observable<User> {
    return this.http.get<any>(environment.url + "/user").pipe(map((res) => res as User));
  }
}
