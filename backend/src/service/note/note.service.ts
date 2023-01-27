import { Types } from 'mongoose';
import { errors } from '../../error/errors';
import { NoteRequestDto } from './dtos/note.request.dto';
import { NoteResponseDto } from './dtos/note.response.dto';
import { NoteRepository } from './note.repository';

export class NoteService {
  public static async createNote(
    body: NoteRequestDto,
  ): Promise<NoteResponseDto> {
    return await NoteRepository.createNoteRepo(body);
  }

  public static async getAllNotes(): Promise<NoteResponseDto[]> {
    return await NoteRepository.getAllNotesRepo();
  }

  public static async getNote(_id: Types.ObjectId): Promise<NoteResponseDto> {
    return await NoteRepository.getNote(_id);
  }

  public static async updateNote(
    id: Types.ObjectId,
    body: NoteRequestDto,
  ): Promise<NoteResponseDto> {
    if (!body.title || !body.content) {
      throw new Error(errors.ONE_OF_THE_FIELD_IS_EMPTY.message);
    }
    return await NoteRepository.updateNoteRepo(id, body);
  }

  public static async deleteNote(id: Types.ObjectId): Promise<boolean> {
    return await NoteRepository.deleteNoteRepo(id);
  }
}
