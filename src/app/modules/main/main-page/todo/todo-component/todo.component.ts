import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from '@appApi/todos/todos-api.types';

@Component({
  selector: 'gkc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todos!: Todo[];

  constructor() {}

  getTodoNote(todo: Todo): string {
    let noteText: string = '';
    todo.notes.forEach((note) => noteText += note.text + "\n");
    return noteText.trim();
  }

  onDeleteTodo(id: string) {
    const index: number = this.todos.findIndex((todo) => todo.id == id);
    if (index != -1) {
      this.todos.splice(index, 1);
    }
  }
}
