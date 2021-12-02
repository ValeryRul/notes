import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '@appApi/todos/todos-api.types';

@Component({
  selector: 'gkc-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent {
  todos: Todo[] = [];

  constructor() {
    this.todos.push(
      {
        id: '1',
        title: '1list',
        notes: [
          { text: 'egg', isCompleted: false },
          { text: 'milk', isCompleted: false },
          { text: 'meat', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '2',
        title: '21list',
        notes: [
          { text: 'egg', isCompleted: false },
          { text: 'milk', isCompleted: false },
          { text: 'meat', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '3',
        title: '3list',
        notes: [
          { text: 'egg', isCompleted: false },
          { text: 'milk', isCompleted: false },
          { text: 'meat', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '4',
        title: '4list',
        notes: [
          { text: 'egg', isCompleted: false },
          { text: 'milk', isCompleted: false },
          { text: 'meat', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '5',
        title: '5list',
        notes: [
          { text: 'egg', isCompleted: false },
          { text: 'milk', isCompleted: false },
          { text: 'meat', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '6',
        title: '6list',
        notes: [
          { text: 'egg', isCompleted: false },
          { text: 'milk', isCompleted: false },
          { text: 'meat', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '7',
        title: '7list',
        notes: [
          { text: 'egg', isCompleted: false },
          { text: 'milk', isCompleted: false },
          { text: 'meat', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      }
    );
  }
}
