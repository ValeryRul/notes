import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.get(getAlltodosQuery).pipe(map((res) => res.todos as Todo[]));
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.mutate<Partial<Todo>>(createTodoQuery, todo).pipe(map((res) => res.createTodo as Todo));
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.mutate<Todo>(updateTodoQuery, todo).pipe(map((res) => res.updateTodo as Todo));
  }

  deleteTodo(id: string): Observable<string> {
    return this.mutate<Partial<Todo>>(deleteTodoQuery, { id }).pipe(map((res) => res.deleteTodo.id as string));
  }

  copyTodo(id: string): Observable<Todo> {
    return this.mutate<Partial<Todo>>(copyTodoQuery, { id }).pipe(map((res) => res.copyTodo as Todo));
  }
}
