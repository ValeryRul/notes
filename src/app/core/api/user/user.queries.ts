export const getUserQuery = `{
  user {
    name
    email
  }
}`;

export const updateUserQuery = `mutation UpdateUser($listMode: Boolean, $darkMode: Boolean) {
  updateUser(listMode: $listMode, darkMode: $darkMode) {
    listMode
    darkMode
  }
}
`;