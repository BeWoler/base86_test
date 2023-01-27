import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { GraphQLBoolean } from 'graphql/type';

export const NoteType = new GraphQLObjectType({
  name: 'note',
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

export const NoteBooleanType = new GraphQLObjectType({
  name: 'noteBoolean',
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
