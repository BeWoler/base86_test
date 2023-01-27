import { Flex } from '@chakra-ui/react';
import React from 'react';
import NoteList from '../../components/Note/NoteList';

const Main = () => {
  return (
    <Flex p={'20px'}>
      <NoteList />
    </Flex>
  );
};

export default Main;
