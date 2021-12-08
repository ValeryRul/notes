import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo-item/todo.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { TodoModelService } from './shared/services/todo-model.service';

@NgModule({
  declarations: [TodoComponent, AddTodoComponent, TodoContainerComponent],
  imports: [SharedModule],
  providers: [TodoModelService],
  exports: [TodoComponent, AddTodoComponent, TodoContainerComponent]
})
export class TodoModule {}
