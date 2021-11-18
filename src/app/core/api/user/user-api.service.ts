import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { User } from './user-api.types';
import { getUserQuery, updateUserQuery } from './user.queries';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseApiService{
  
 constructor(apollo: Apollo) {
   super(apollo);
 } 
  
  getUserInfo(): Observable<User> {
    return this.get<User>(getUserQuery);
  }
  
  updateUser(user: Partial<User>): Observable<Partial<User> | null> {
    return this.mutate<Partial<User>>(updateUserQuery, user);
  }
}
