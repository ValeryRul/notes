import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '@appModules/todo/shared/todo.model';

@Component({
  selector: 'gkc-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  
  @Output()
  deleteTodo = new EventEmitter<number>();

  @Output()
  copyTodo = new EventEmitter<number>();

  @Output()
  focusIn = new EventEmitter<TodoModel>();

  @Output()
  focusOut = new EventEmitter<TodoModel>();

  @Input() set todo(value: TodoModel) {
    this._todo = {...value};
  }

  get todo(): TodoModel{
    return this._todo;
  }

  private _todo!: TodoModel;

  onDeleteTodoClick(id: number): void {
    this.deleteTodo.emit(id);
  }

  onCopyTodoClick(id: number): void {
    this.copyTodo.emit(id);
  }

  onTodoFocusOut(event: FocusEvent): void {
    if (!event.relatedTarget) {
      this.focusOut.emit(this.todo);
    }
  }
}
