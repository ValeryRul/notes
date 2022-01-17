import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../types/user-api.types';
import { BaseApiService } from '../base-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseApiService{
  
}
