import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_ALL_NOTES, GET_NOTE } from './note/query/note.query';
import {
  CREATE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
} from './note/mutation/note.mutation';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllNotes: GET_ALL_NOTES,
    getNote: GET_NOTE,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createNote: CREATE_NOTE,
    updateNote: UPDATE_NOTE,
    deleteNote: DELETE_NOTE,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
