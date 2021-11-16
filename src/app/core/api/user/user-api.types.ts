export interface User {
  id: string;
  name: string;
  email: string;
  listMode: boolean;
  darkMode: boolean;
}

export const userQuery = `{
  user {
    name
    email
  }
}`;
