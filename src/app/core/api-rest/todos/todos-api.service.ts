import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateTodo, Todo } from '../../types/todos-api.types';
import { BaseApiService } from '../base-api.service';

@Injectable()
export class TodosApiService{

  constructor(private http: HttpClient){}

  getAll$(): Observable<Todo[]> {
    return this.http.get<any>(environment.url+ "/").pipe(map((res) => res as Todo[]));
  }

  createTodo$(todo: CreateTodo): Observable<any> {
    return this.http.post<any>(environment.url, todo).pipe(map((res) => res.createTodo as Todo));
  }

  updateTodo$(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.url, todo).pipe(map((res) => res as Todo));
  }

/*   deleteTodo$(id: string): Observable<string> {
    return this.http.delete<Partial<Todo>>('/', { id }).pipe(map((res) => res as string));
  } */

  copyTodo$(id: string): Observable<Todo> {
    return this.http.post<Partial<Todo>>('/', { id }).pipe(map((res) => res as Todo));
  }
}
