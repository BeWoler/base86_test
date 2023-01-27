import { useMutation } from '@apollo/client';
import { UPDATE_NOTE } from '../../../api/note/note.mutation.api';
import { GET_ALL_NOTES } from '../../../api/note/note.query.api';
import { Button, useDisclosure } from '@chakra-ui/react';
import Form from '../../shared/Form/Form';
import { IEventNote } from '../interfaces/note.interface';

const UpdateNote = ({ _id }: Pick<IEventNote, '_id'>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateNote] = useMutation(UPDATE_NOTE, {
    refetchQueries: [{ query: GET_ALL_NOTES }],
  });
  return (
    <>
      <Button onClick={onOpen}>Edit</Button>
      <Form
        isOpen={isOpen}
        onClose={onClose}
        updateNote={updateNote}
        update
        noteId={_id}
      />
    </>
  );
};

export default UpdateNote;
