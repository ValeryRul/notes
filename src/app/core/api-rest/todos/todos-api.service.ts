import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateTodo, Todo } from '../../types/todos-api.types';


@Injectable()
export class TodosApiService{

  constructor(private http: HttpClient){}

  getAll$(): Observable<Todo[]> {
    return this.http.get<any>(environment.url).pipe(map((res) => res as Todo[]));
  }

  createTodo$(todo: CreateTodo): Observable<any> {
    return this.http.post<any>(environment.url, todo).pipe(map((res) => res as Todo));
  }

  updateTodo$(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.url, todo).pipe(map((res) => res as Todo));
  }

  deleteTodo$(id: number): Observable<number> {
    return this.http.delete<number>(`${environment.url}/${id}`).pipe(map((res) => res as number));
  }

  copyTodo$(id: number): Observable<Todo> {
    return this.http.post<Todo>(`${environment.url}/copy`, id).pipe(map((res) => res as Todo));
  }
}
