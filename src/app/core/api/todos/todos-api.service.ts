import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Todo, todosQuery } from './todos-api.types';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService extends BaseApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  getAll(): Observable<Todo[]> {
    return this.get<Todo[]>(todosQuery);
  }
}
