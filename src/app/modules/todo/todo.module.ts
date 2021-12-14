import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { TodoModelService } from './shared/services/todo-model.service';

@NgModule({
  declarations: [TodoItemComponent, AddTodoComponent, TodoContainerComponent],
  imports: [SharedModule],
  providers: [TodoModelService],
  exports: [TodoContainerComponent]
})
export class TodoModule {}
