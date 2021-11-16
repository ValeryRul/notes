export interface Label {
  id: string;
  name: string;
}

export const labelsQuery = `{
  labels {
    id
    name
  }
}`;
