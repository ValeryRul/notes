import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'gkc-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent{

  constructor() { }

}
