import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Note, Todo } from '@appApi/todos/todos-api.types';

@Component({
  selector: 'gkc-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  getTodoNote(notes: Note[]): string {
    return notes.reduce((noteText: string, note: Note) => noteText + note.text + '\n', '').trim();
  }
}
