import { useMutation } from '@apollo/client';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { DELETE_NOTE } from '../../api/note/note.mutation.api';
import { GET_ALL_NOTES } from '../../api/note/note.query.api';
import { INote } from './interfaces/note.interface';
import UpdateNote from './services/UpdateNote';

const NoteCard = ({ _id, title, content }: INote) => {
  const [fullNote, setFullNote] = useState<boolean>(false);
  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: GET_ALL_NOTES }],
  });

  const deleteHandler = () => {
    deleteNote({ variables: { _id: _id } });
  };

  return (
    <Flex
      direction={'column'}
      borderRadius={'10px'}
      boxShadow={'0px 0px 2px gray'}
      padding={'10px'}
      w={'fit-content'}
      minW={'200px'}
      maxW={'300px'}
      h={'fit-content'}
      justify={'space-between'}
    >
      <Flex direction={'column'} onClick={() => setFullNote(!fullNote)}>
        <Text
          maxH={fullNote ? 'fit-content' : '50px'}
          overflow={fullNote ? 'unset' : 'hidden'}
          fontWeight={700}
        >
          {title}
        </Text>
        <Text
          maxH={fullNote ? 'fit-content' : '50px'}
          overflow={fullNote ? 'unset' : 'hidden'}
        >
          {content}
        </Text>
      </Flex>
      <Flex direction={'column'}>
        {content.split('').length > 15 ? (
          <Button mt={'10px'} onClick={() => setFullNote(!fullNote)}>
            {fullNote ? 'Hide' : 'Show'}
          </Button>
        ) : null}
        <Flex direction={'row'} gap={'20px'} mt={'20px'} justify={'center'}>
          <UpdateNote _id={_id} />
          <Button onClick={deleteHandler}>Delete</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NoteCard;
