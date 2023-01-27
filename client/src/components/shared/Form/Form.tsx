import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { IForm } from './interfaces/form.interface';

const Form = ({
  update,
  isOpen,
  onClose,
  createNote,
  updateNote,
  noteId,
}: IForm) => {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const contentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, content: e.target.value });
  };

  const noteHandler = () => {
    createNote &&
      createNote({
        variables: { title: formData.title, content: formData.content },
      });
    update &&
      updateNote &&
      updateNote({
        variables: {
          _id: noteId,
          title: formData.title,
          content: formData.content,
        },
      });
    setFormData({ title: '', content: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={'20px'}>
        <ModalHeader>{update ? 'Update note' : 'Create note'}</ModalHeader>
        <ModalCloseButton />
        <Flex direction={'column'} gap={'20px'}>
          <FormControl isRequired={update ? false : true}>
            {update ? (
              <FormHelperText>One of the fields is required</FormHelperText>
            ) : null}
            <FormLabel>Title</FormLabel>
            <Input type="text" value={formData.title} onChange={titleHandler} />
          </FormControl>
          <FormControl isRequired={update ? false : true}>
            <FormLabel>Content</FormLabel>
            <Input
              type="text"
              value={formData.content}
              onChange={contentHandler}
            />
          </FormControl>
          <Button onClick={noteHandler}>{update ? 'Save' : 'Create'}</Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default Form;
