import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Todo } from './todos-api.types';
import { copyTodoQuery, createTodoQuery, deleteTodoQuery, getAlltodosQuery, updateTodoQuery } from './todos.queries';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService extends BaseApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  getAll(): Observable<Todo[]> {
    return this.get<Todo[]>(getAlltodosQuery);
  }

  createTodo(todo: Partial<Todo>): Observable<Partial<Todo> | null> {
    return this.mutate<Partial<Todo>>(createTodoQuery, todo);
  }

  updateTodo(todo: Todo): Observable<Todo | null> {
    return this.mutate<Todo>(updateTodoQuery, todo);
  }

  deleteTodo(id: string): Observable<Partial<Todo | null>> {
    return this.mutate<Partial<Todo>>(deleteTodoQuery, {id});
  }
  
  copyTodo(id: string): Observable<Partial<Todo | null>> {
    return this.mutate<Partial<Todo>>(copyTodoQuery, {id});
  }
}
