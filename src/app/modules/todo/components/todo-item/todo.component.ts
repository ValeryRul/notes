import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Note, Todo } from '@appApi/todos/todos-api.types';

@Component({
  selector: 'gkc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo!: Todo;

  constructor() {}

  getTodoNote(notes: Note[]): string {
    return notes.reduce((noteText: string, note: Note) => noteText + note.text + '\n', '').trim();
  }
}
