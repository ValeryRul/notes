import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Note, Todo } from '@appApi/todos/todos-api.types';

@Component({
  selector: 'gkc-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Output()
  onDeleteTodo = new EventEmitter();

  @Output()
  onCopyTodo = new EventEmitter();

  @Input() todo!: Todo;

  getTodoNote(notes: Note[]): string {
    return notes.reduce((noteText: string, note: Note) => noteText + note.text + '\n', '').trim();
  }

  onDeleteTodoClick(id: string): void {
    this.onDeleteTodo.emit(id);
  }

  onCopyTodoClick(id: string): void {
    this.onCopyTodo.emit(id);
  }
}
