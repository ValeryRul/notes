import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '@appApi/todos/todos-api.types';


@Component({
  selector: 'gkc-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent{

  isFormExpanded: boolean = false;
  noteText!: string;
  noteTitle!: string;
  
  note: Todo = {
    id: "",
    title: "",
    notes: [],
    labels: [],
    color: '',
    isCheckboxMode: false
  };

  constructor() {
  }

  onExpandForm(flag: boolean){
    this.isFormExpanded = flag;
  }

  convertTextToNoteArr(){
    this.noteText.split("\n")
  }

  onCreateTodo(){
    this.isFormExpanded = false;
    if(this.noteText || this.noteTitle)
    console.log(this.noteText, this.noteTitle)
  }

}
