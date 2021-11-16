import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { User, userQuery } from './user-api.types';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseApiService{
  
 constructor(apollo: Apollo) {
   super(apollo);
   
 } 
  
  getUserInfo(): Observable<User> {
    return this.get<User>(userQuery);
  }
}
