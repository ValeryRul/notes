import { NotExpr } from '@angular/compiler';
import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CreateTodo, Note} from 'app/core/types/todos-api.types';

@Component({
  selector: 'gkc-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  @Output()
  onCreateTodo = new EventEmitter<CreateTodo>();

  todoNotes!: string;

  isFormExpanded: boolean = false;

  todo: CreateTodo = {
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
    if (this.todo.title || this.todoNotes) {
      if (this.todoNotes) {
        this.setNotes(this.todoNotes);
      }
      this.onCreateTodo.emit(this.todo);
      this.clearForm();
    }
    this.onExpandForm(false);
  }

  setNotes(todoNote: string) {
    this.todo.notes = this.convertTextToNoteArray(todoNote);
  }

  clearForm(): void {
    this.todo.title = '';
    this.todo.notes = [];
    this.todoNotes = '';
  }

  convertTextToNoteArray(noteText: string): Note[] {
    return noteText.split('\n').map((note) => ({ text: note, isCompleted: false }));
  }
}
