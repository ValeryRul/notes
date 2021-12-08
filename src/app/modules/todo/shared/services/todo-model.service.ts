import { Injectable } from '@angular/core';
import { TodosApiService } from '@appApi/todos/todos-api.service';
import { Todo } from '@appApi/todos/todos-api.types';
import { TodoModule } from '@appModules/todo/todo.module';
import { Observable } from 'rxjs';

@Injectable()
export class TodoModelService {
    
  constructor(private todosApiService: TodosApiService) {}

  getAll(): Observable<Todo[]> {
    return this.todosApiService.getAll();
  }

  createTodo(todo: Todo) {
    this.todosApiService.createTodo(todo);
  }

  updateTodo(todo: Todo) {
    this.todosApiService.updateTodo(todo);
  }

  deleteTodo(id: string) {
    this.todosApiService.deleteTodo(id);
  }

  copyTodo(id: string) {
    this.todosApiService.copyTodo(id);
  }
}
