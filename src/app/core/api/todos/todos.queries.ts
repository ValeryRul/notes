export const getAlltodosQuery = `{
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

export const createTodoQuery = `mutation CreateTodo($title: String!, $notes: [String!]!, $labels: [ID]!, $color: String, $isCheckboxMode: Boolean) {
  createTodo(title: $title, notes: $notes, labels: $labels, color: $color, isCheckboxMode: $isCheckboxMode) {
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

export const updateTodoQuery = `mutation UpdateTodo($id: ID!, $title: String, $notes: [NotesInput], $labels: [ID], $color: String, $isCheckboxMode: Boolean) {
  updateTodo(id: $id, title: $title, notes: $notes, labels: $labels, color: $color, isCheckboxMode: $isCheckboxMode) {
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
}
`;

export const deleteTodoQuery = `mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    id
  }
}
`;

export const copyTodoQuery = `mutation CopyTodo($id: ID!) {
  copyTodo(sourceId: $id) {
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
}
`;
