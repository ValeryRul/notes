export const getAllLabelsQuery = `{
  labels {
    id
    name
  }
}`;

export const createLabelQuery = `mutation CreateLabel($name: String!) {
  createLabel(name: $name) {
    id
    name
  }
}
`;

export const deleteLabelQuery = `mutation DeleteLabel($id: ID!) {
  deleteLabel(id: $id) {
    id
  }
}
`;