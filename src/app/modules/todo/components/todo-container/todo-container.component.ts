import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TodoModelService } from '@appModules/todo/shared/services/todo-model.service';
import { TodoModel } from '@appModules/todo/shared/todo.model';
import { CreateTodo, Todo } from 'app/core/types/todos-api.types';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gkc-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent implements OnInit {
  todoList$!: Observable<TodoModel[]>;
  private selectedTodo!: TodoModel | undefined;

  constructor(private todoModelService: TodoModelService) {
    this.todoList$ = this.todoModelService.todoList$;
  }

  ngOnInit(): void {
    this.loadAllTodos();
  }

  onCreateTodo(todo: CreateTodo): void {
    this.todoModelService.createTodo$(todo).pipe(take(1)).subscribe();
  }

  onFocusIn(todo: TodoModel): void {
    if (!this.selectedTodo) {
      this.selectedTodo = todo;
    }
    if (this.selectedTodo.id === todo.id || !this.todoModelService.isTodoUpdated(this.selectedTodo)) {
      return;
    }
    console.log('sent in');
    this.todoModelService.updateTodo$(this.selectedTodo).pipe(take(1)).subscribe();
    this.selectedTodo = todo;
  }

  onFocusOut(todo: TodoModel): void {
    if (this.todoModelService.isTodoUpdated(todo)) {
      this.todoModelService.updateTodo$(todo).pipe(take(1)).subscribe();
      console.log('sent out');
      this.selectedTodo = undefined;
    }
  }

  loadAllTodos(): void {
    this.todoModelService.loadTodoList$().pipe(take(1)).subscribe();
  }

  onDeleteTodo(id: number): void {
    this.todoModelService.deleteTodo$(id).pipe(take(1)).subscribe();
  }

  onCopyTodo(id: number): void {
    this.todoModelService.copyTodo$(id).pipe(take(1)).subscribe();
  }
}
