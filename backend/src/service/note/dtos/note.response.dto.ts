import { Types } from 'mongoose';

export class NoteResponseDto {
  _id: Types.ObjectId;
  title: string;
  content: string;

  constructor(model: any) {
    this._id = model._id;
    this.title = model.title;
    this.content = model.content;
  }
}
