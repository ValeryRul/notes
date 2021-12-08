import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Note, Todo } from '@appApi/todos/todos-api.types';

@Component({
  selector: 'gkc-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {

  @Output()
  onCreateTodo = new EventEmitter();

  todoNotes!: string;

  isFormExpanded: boolean = false;

  todo: Todo = {
    id: '',
    title: '',
    notes: [],
    labels: [],
    color: 'default',
    isCheckboxMode: false
  };

  constructor() {}

  onExpandForm(flag: boolean) {
    this.isFormExpanded = flag;
  }

  onCreateTodoClick(): void {
    this.onExpandForm(false);
    if (this.todo.title || this.todoNotes) {
      if (this.todoNotes) {
        this.setNotes(this.todoNotes);
      }
      this.onCreateTodo.emit(this.todo);
    }
  }

  setNotes(todoNote: string) {
    this.todo.notes = this.convertFromTextToArrayOfNotes(todoNote);
  }

  convertFromTextToArrayOfNotes(todoNote: string): Note[] {
    return todoNote.split('\n').map((todoNote) => ({ text: todoNote, isCompleted: false }));
  }
}
