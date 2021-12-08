import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gkc-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  isFormExpanded: boolean = false;

  onExpandForm(flag: boolean): void {
    this.isFormExpanded = flag;
  }

  onCreateTodoClick(): void {
    this.onExpandForm(false);
  }
}
