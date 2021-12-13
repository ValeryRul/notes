import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CreateTodo, Todo } from '@appApi/todos/todos-api.types';
import { TodoModelService } from '@appModules/todo/shared/services/todo-model.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gkc-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent implements OnInit {
  todoList!: Observable<Todo[]>;

  constructor(private todoModelService: TodoModelService) {
    this.todoList = this.todoModelService.todoList;
  }

  ngOnInit(): void {
    this.loadAllTodos();
  }

  onCreateTodo(todo: CreateTodo): void {
    this.todoModelService.createTodo(todo).pipe(take(1)).subscribe();
  }

  loadAllTodos(): void {
    this.todoModelService.loadTodoList().pipe(take(1)).subscribe();
  }
}
