import { Injectable } from '@angular/core';
import { TodosApiService } from '@appApi/todos/todos-api.service';
import { CreateTodo, Todo } from '@appApi/todos/todos-api.types';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TodoModelService {
  private _todoList$ = new BehaviorSubject<Todo[]>([]);

  get todoList$(): Observable<Todo[]> {
    return this._todoList$.asObservable();
  }

  constructor(private todosApiService: TodosApiService) {}

  loadTodoList$(): Observable<Todo[]> {
    return this.todosApiService.getAll().pipe(tap((todoList) => this._todoList$.next(todoList)));
  }

  createTodo$(todo: CreateTodo): Observable<Todo> {
    return this.todosApiService
      .createTodo(todo)
      .pipe(tap((todo: Todo) => this._todoList$.next([...this._todoList$.getValue(), todo])));
  }

  deleteTodo$(id: string): Observable<string> {
    return this.todosApiService
      .deleteTodo(id)
      .pipe(tap((id) => this._todoList$.next(this._todoList$.getValue().filter((todo) => todo.id != id))));
  }

  copyTodo$(id: string): Observable<Todo> {
    return this.todosApiService
      .copyTodo(id)
      .pipe(tap((todo) => this._todoList$.next([...this._todoList$.getValue(), todo])));
  }
}
