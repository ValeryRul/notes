import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Note, Todo } from '@appApi/todos/todos-api.types';
import { TodoModelService } from '@appModules/todo/shared/services/todo-model.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gkc-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent {
  todos: Todo[] = [];

  constructor(private todoModelService: TodoModelService) {
    this.getAllTodos().pipe(take(1)).subscribe(todos => console.log(todos))
    /* this.todos.push(
      {
        id: '1',
        title: 'todo1',
        notes: [
          { text: 'action1', isCompleted: false },
          { text: 'action2', isCompleted: false },
          { text: 'action3', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '2',
        title: 'todo2',
        notes: [
          { text: 'action1', isCompleted: false },
          { text: 'action2', isCompleted: false },
          { text: 'action3', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '3',
        title: 'todo3',
        notes: [
          { text: 'action1', isCompleted: false },
          { text: 'action2', isCompleted: false },
          { text: 'action3', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '4',
        title: 'todo4',
        notes: [
          { text: 'action1', isCompleted: false },
          { text: 'action2', isCompleted: false },
          { text: 'action3', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '5',
        title: 'todo5',
        notes: [
          { text: 'action1', isCompleted: false },
          { text: 'action2', isCompleted: false },
          { text: 'action3', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '6',
        title: 'todo6',
        notes: [
          { text: 'action1', isCompleted: false },
          { text: 'action2', isCompleted: false },
          { text: 'action3', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      },
      {
        id: '7',
        title: 'todo7',
        notes: [
          { text: 'action1', isCompleted: false },
          { text: 'action2', isCompleted: false },
          { text: 'action3', isCompleted: false }
        ],
        labels: [],
        color: 'default',
        isCheckboxMode: false
      }
    ); */
  }

  onCreateTodo(todo: Todo) {
    this.todoModelService.createTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.todoModelService.getAll();
  }
}
