import { useMutation } from '@apollo/client';
import { CREATE_NOTE } from '../../../api/note/note.mutation.api';
import { GET_ALL_NOTES } from '../../../api/note/note.query.api';
import Form from '../../shared/Form/Form';
import { IEventNote } from '../interfaces/note.interface';

const CreateNote = ({ isOpen, onClose }: IEventNote) => {
  const [createNote] = useMutation(CREATE_NOTE, {
    refetchQueries: [{ query: GET_ALL_NOTES }],
  });
  return <Form isOpen={isOpen} onClose={onClose} createNote={createNote} />;
};

export default CreateNote;
