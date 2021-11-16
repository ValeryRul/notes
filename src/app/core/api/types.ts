interface Note {
  text: string;
  isCompleted: boolean;
}

interface Label {
  id: string;
  name: string;
}

interface Todo {
  id: string;
  title: string;
  notes: Note[];
  labels: Label[];
  color: string;
  isCheckboxMode: boolean;
}

// input NotesInput {
//   text: String!
//   isCompleted: Boolean!
// }

// enum Action {
//   CREATED,
//   DELETED,
//   UPDATED
// }

// interface TodoAction {
//   action: Action;
//   todo: Todo;
// }

// interface LabelAction {
//   action: Action;
//   label: Label;
// }

interface User {
  id: string;
  name: string;
  email: string
  listMode: boolean;
  darkMode: boolean;
}

interface Query {
  todos: Todo[];
  labels: Label[];
  user: User;
}

// type Mutation {
//   createTodo(title: String!, notes: [String!]!, labels: [ID]!, color: String, isCheckboxMode: Boolean): Todo
//   updateTodo(id: ID!, title: String, notes: [NotesInput], labels: [ID], color: String, isCheckboxMode: Boolean): Todo
//   deleteTodo(id: ID!): Todo
//   copyTodo(sourceId: ID!): Todo
//   createLabel(name: String!): Label
//   deleteLabel(id: ID!): Label
//   updateUser(listMode: Boolean, darkMode: Boolean): User
// }

// type Subscription {
//   todoStream: TodoAction!
//   labelStream: LabelAction!
// }