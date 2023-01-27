import { GraphQLNonNull, GraphQLString } from 'graphql';
import { NoteResponseDto } from '../../../service/note/dtos/note.response.dto';
import { NoteService } from '../../../service/note/note.service';
import { NoteType, NoteBooleanType } from '../typesDef/note.type';

export const CREATE_NOTE = {
  type: NoteType,
  args: {
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any): Promise<NoteResponseDto> {
    return await NoteService.createNote({
      title: args.title,
      content: args.content,
    });
  },
};

export const UPDATE_NOTE = {
  type: NoteType,
  args: {
    _id: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any): Promise<NoteResponseDto> {
    return await NoteService.updateNote(args._id, {
      title: args.title,
      content: args.content,
    });
  },
};

export const DELETE_NOTE = {
  type: NoteBooleanType,
  args: {
    _id: { type: GraphQLNonNull(GraphQLString) },
  },
  async resolve(
    parent: any,
    args: any,
  ): Promise<{ successful: boolean; message: string }> {
    const note = await NoteService.deleteNote(args._id);
    return {
      successful: note,
      message: note ? 'Deleted' : 'Something wrong',
    };
  },
};
