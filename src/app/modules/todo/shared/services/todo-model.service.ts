import { Injectable } from '@angular/core';
import { TodosApiService } from 'app/core/api-rest/todos/todos-api.service';
import { CreateTodo, Note, Todo } from 'app/core/types/todos-api.types';
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
    return this.todosApiService.getAll$().pipe(tap((todoList) => this._todoList$.next(todoList)));
  }

  createTodo$(todo: CreateTodo): Observable<Todo> {
    return this.todosApiService
      .createTodo$(todo)
      .pipe(tap((todo: Todo) => this._todoList$.next([...this._todoList$.getValue(), todo])));
  }

  /*   deleteTodo$(id: string): Observable<string> {
    return this.todosApiService
      .deleteTodo$(id)
      .pipe(tap((id) => this._todoList$.next(this._todoList$.getValue().filter((todo) => todo.id != id))));
  } */

  copyTodo$(id: string): Observable<Todo> {
    return this.todosApiService
      .copyTodo$(id)
      .pipe(tap((todo) => this._todoList$.next([...this._todoList$.getValue(), todo])));
  }

  updateTodo$(todoWithUpdates: Todo): Observable<Todo> {
    return this.todosApiService
      .updateTodo$(todoWithUpdates)
      .pipe(
        tap((overwrittenTodo) =>
          this._todoList$.next(
            this._todoList$.getValue().map((todo: Todo) => (todo.id == overwrittenTodo.id ? todo : overwrittenTodo))
          )
        )
      );
  }

/*   onGetUpdatedTodo(): void {
    if (this.isUpdatesToTodoAreSetted()) {
      this.onGetTodoWithUpdates.emit(this.todo);
    }
  }

  private isUpdatesToTodoAreSetted(): boolean {
    let isUpdated: boolean = false;
    if (this.convertNoteArrayToText(this.todo.notes) != this.noteText) {
      this.todo.notes = this.convertTextToNoteArray(this.noteText);
      isUpdated = true;
    }
    if (this.todo.title != this.todoTitle) {
      this.todo.title = this.todoTitle;
      isUpdated = true;
    }
    return isUpdated;
  } */

}
