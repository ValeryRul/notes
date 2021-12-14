import { Label } from '@appApi/labels/labels-api.types';

export interface Note {
  text: string;
  isCompleted: boolean;
}

interface BaseTodo {
  title: string;
  labels: Label[];
  color: string;
  isCheckboxMode: boolean;
}

export interface CreateTodo extends BaseTodo {
  notes: string[];
}

export interface Todo extends BaseTodo {
  id: string;
  notes: Note[];
}
