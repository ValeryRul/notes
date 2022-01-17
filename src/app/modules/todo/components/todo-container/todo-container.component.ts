import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { TodoModelService } from '@appModules/todo/shared/services/todo-model.service';
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
  todoList$!: Observable<Todo[]>;
  updatedTodo!: Todo;

  private selectedTodoId!: string;

  constructor(private todoModelService: TodoModelService) {
    this.todoList$ = this.todoModelService.todoList$;
  }

  ngOnInit(): void {
    this.loadAllTodos();
  }

  onCreateTodo(todo: CreateTodo): void {
    this.todoModelService.createTodo$(todo).pipe(take(1)).subscribe();
  }

  onFocusIn(todo: Todo): void {
    console.log("here");
    if (!this.selectedTodoId) {
      this.selectedTodoId = todo.id;
    }
    if (!this.selectedTodoId || this.selectedTodoId === todo.id) {
      return;
    }
    console.log("submitted");
    this.todoModelService.updateTodo$(todo).pipe(take(1)).subscribe();
  }

  loadAllTodos(): void {
    this.todoModelService.loadTodoList$().pipe(take(1)).subscribe();
  }

  onDeleteTodo(id: string): void {
    console.log("delete");  
/*     this.todoModelService.deleteTodo$(id).pipe(take(1)).subscribe();
 */  }

  onCopyTodo(id: string): void {
    this.todoModelService.copyTodo$(id).pipe(take(1)).subscribe();
  }

}
