import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo-component/todo.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';

@NgModule({
  declarations: [TodoComponent, AddTodoComponent, TodoContainerComponent],
  imports: [SharedModule],
  exports: [TodoComponent, AddTodoComponent, TodoContainerComponent]
})
export class TodoModule {}
