import { gql } from '@apollo/client';

export const GET_ALL_NOTES = gql`
  query {
    notes: getAllNotes {
      _id
      title
      content
    }
  }
`;

export const GET_NOTE = gql`
  query ($_id: String!) {
    note: getNote(_id: $_id) {
      _id
      title
      content
    }
  }
`;
