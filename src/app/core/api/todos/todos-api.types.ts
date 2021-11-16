import { Label } from '@appApi/labels/labels-api.types';

export interface Note {
  text: string;
  isCompleted: boolean;
}

export interface Todo {
  id: string;
  title: string;
  notes: Note[];
  labels: Label[];
  color: string;
  isCheckboxMode: boolean;
}

export const todosQuery = `{
  todos {
    id
      title
      notes {
        text
        isCompleted
      }
      labels {
        id
        name
      }
      color
      isCheckboxMode
  }
}`;
