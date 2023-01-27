import mongoose from 'mongoose';

interface INote {
  title: string;
  content: string;
}

const NoteModel = new mongoose.Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model('Notes', NoteModel);
