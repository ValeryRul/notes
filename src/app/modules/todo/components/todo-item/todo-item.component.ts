import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Note, Todo } from 'app/core/types/todos-api.types';


@Component({
  selector: 'gkc-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Output()
  deleteTodo = new EventEmitter<string>();

  @Output()
  copyTodo = new EventEmitter<string>();

  @Output()
  getTodoWithUpdates = new EventEmitter<Todo>();

  @Output()
  focusIn = new EventEmitter<Todo>();

  @Input() todo!: Todo;

  convertNoteArrayToText(notes: Note[]): string {
    return notes.reduce((noteText: string, note: Note) => noteText + note.text + '\n', '').trim();
  }

  onDeleteTodoClick(id: string): void {
    this.deleteTodo.emit(id);
  }

  onCopyTodoClick(id: string): void {
    console.log("copy");
    this.copyTodo.emit(id);
  }

  onTodoFocusOut(event: FocusEvent): void {
    console.log("sdsd");
/*     if (!event.relatedTarget) {
      console.log('focus out')
      this.focusIn.emit(this.todo)
    } */
  }
}
