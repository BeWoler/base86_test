import { gql } from '@apollo/client';

export const CREATE_NOTE = gql`
  mutation AddNote($title: String!, $content: String!) {
    newNote: createNote(title: $title, content: $content) {
      _id
      title
      content
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($_id: String!, $title: String!, $content: String!) {
    updatedNote: updateNote(_id: $_id, title: $title, content: $content) {
      _id
      title
      content
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($_id: String!) {
    deleted: deleteNote(_id: $_id) {
      successful
      message
    }
  }
`;
