import { Types } from 'mongoose';
import noteModel from '../../model/note.model';
import { NoteRequestDto } from './dtos/note.request.dto';
import { NoteResponseDto } from './dtos/note.response.dto';

export class NoteRepository {
  public static async createNoteRepo(
    body: NoteRequestDto,
  ): Promise<NoteResponseDto> {
    const note = await noteModel.create(body);
    return note;
  }

  public static async getAllNotesRepo(): Promise<NoteResponseDto[]> {
    const notes = await noteModel.find().lean();
    return notes;
  }

  public static async getNote(_id: Types.ObjectId): Promise<NoteResponseDto> {
    return await noteModel.findOne({ _id: _id }).lean();
  }

  public static async updateNoteRepo(
    id: Types.ObjectId,
    body: NoteRequestDto,
  ): Promise<NoteResponseDto> {
    return await noteModel
      .findOneAndUpdate({ _id: id }, { ...body }, { new: true })
      .lean();
  }

  public static async deleteNoteRepo(id: Types.ObjectId): Promise<boolean> {
    const result = await noteModel.findOneAndDelete({ _id: id });
    if (result) return true;
    return false;
  }
}
