import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { NoteResponseDto } from '../../../service/note/dtos/note.response.dto';
import { NoteService } from '../../../service/note/note.service';
import { NoteType } from '../typesDef/note.type';

export const GET_ALL_NOTES = {
  type: new GraphQLList(NoteType),
  args: {},
  async resolve(parent: any, args: any): Promise<NoteResponseDto[]> {
    return await NoteService.getAllNotes();
  },
};

export const GET_NOTE = {
  type: NoteType,
  args: { _id: { type: GraphQLNonNull(GraphQLString) } },
  async resolve(parent: any, args: any): Promise<NoteResponseDto> {
    return await NoteService.getNote(args._id);
  },
};
