import { Label } from 'app/core/types/labels-api.types';

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
  notes: Note[];
}

export interface Todo extends BaseTodo {
  id: string;
  notes: Note[];
}
