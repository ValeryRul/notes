import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoComponent } from './todo-component/todo.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';

@NgModule({
  declarations: [TodoComponent, AddTodoComponent, TodoContainerComponent],
  imports: [SharedModule],
  exports: [TodoComponent, AddTodoComponent, TodoContainerComponent]
})
export class TodoModule {}
