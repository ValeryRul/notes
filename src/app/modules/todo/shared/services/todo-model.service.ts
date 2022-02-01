import { Injectable } from '@angular/core';
import { TodosApiService } from 'app/core/api-rest/todos/todos-api.service';
import { CreateTodo, Note, Todo } from 'app/core/types/todos-api.types';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TodoModel } from '../todo.model';

@Injectable()
export class TodoModelService {
  private _todoList$ = new BehaviorSubject<TodoModel[]>([]);

  get todoList$(): Observable<TodoModel[]> {
    return this._todoList$.asObservable();
  }

  private get todoList(): TodoModel[]{
    return this._todoList$.getValue();
  }

  constructor(private todosApiService: TodosApiService) {}

  loadTodoList$(): Observable<TodoModel[]> {
    return this.todosApiService
      .getAll$()
      .pipe(map((todoList: Todo[]) => todoList.map((todo: Todo) => this.convertTodoToTodoModel(todo))))
      .pipe(
        tap((todoList) => {
          this._todoList$.next(todoList);
        })
      );
  }

  createTodo$(todo: CreateTodo): Observable<TodoModel> {
    return this.todosApiService
      .createTodo$(todo)
      .pipe(map((todo: Todo) => this.convertTodoToTodoModel(todo)))
      .pipe(
        tap((todo: TodoModel) => {
          this._todoList$.next([...this._todoList$.getValue(), todo]);
        })
      );
  }

  deleteTodo$(id: number): Observable<number> {
    return this.todosApiService
      .deleteTodo$(id)
      .pipe(tap((id) => this._todoList$.next(this._todoList$.getValue().filter((todo) => todo.id !== id))));
  }

  copyTodo$(id: number): Observable<TodoModel> {
    return this.todosApiService
      .copyTodo$(id)
      .pipe(map((todo: Todo) => this.convertTodoToTodoModel(todo)))
      .pipe(
        tap((todo: TodoModel) => {
          this._todoList$.next([...this._todoList$.getValue(), todo]);
        })
      );
  }

  updateTodo$(todoWithUpdates: TodoModel): Observable<TodoModel> {
    return this.todosApiService
      .updateTodo$(this.convertTodoModelToTodo(todoWithUpdates))
      .pipe(map((todo: Todo) => this.convertTodoToTodoModel(todo)))
      .pipe(
        tap((overwrittenTodo) => {
          this._todoList$.next(
            this._todoList$
              .getValue()
              .map((todo: TodoModel) => (todo.id !== overwrittenTodo.id ? todo : overwrittenTodo))
          );
        })
      );
  }

  convertTextToNoteArray(noteText: string): Note[] {
    return noteText.split('\n').map((note) => ({ text: note, isCompleted: false }));
  }

  convertNoteArrayToText(notes: Note[]): string {
    return notes.reduce((noteText: string, note: Note) => noteText + note.text + '\n', '').trim();
  }

  convertTodoToTodoModel(todo: Todo): TodoModel {
    return {
      title: todo.title,
      labels: todo.labels,
      color: todo.color,
      isCheckboxMode: todo.isCheckboxMode,
      notesText: this.convertNoteArrayToText(todo.notes),
      id: todo.id
    };
  }

  convertTodoModelToTodo(todoModel: TodoModel): Todo {
    return {
      title: todoModel.title,
      labels: todoModel.labels,
      color: todoModel.color,
      isCheckboxMode: todoModel.isCheckboxMode,
      notes: this.convertTextToNoteArray(todoModel.notesText),
      id: todoModel.id
    };
  }

  findTodoById(id: number): TodoModel | undefined {
    return this.todoList.find((todo) => todo.id === id);
  }

  isTodoUpdated(updatedTodo: TodoModel): boolean {
    let todoWithoutUpdates: TodoModel | undefined = this.findTodoById(updatedTodo.id);
    if (todoWithoutUpdates?.notesText !== updatedTodo.notesText || todoWithoutUpdates.title !== updatedTodo.title) {
      return true;
    }
    return false;
  }
}
