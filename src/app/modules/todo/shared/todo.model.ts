import { BaseTodo } from "app/core/types/todos-api.types";

export interface TodoModel extends BaseTodo{
    notesText: string;
    id: number;
}