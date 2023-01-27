import { useQuery } from '@apollo/client';
import { Spinner, Text, Flex } from '@chakra-ui/react';
import { GET_ALL_NOTES } from '../../api/note/note.query.api';
import { INote } from './interfaces/note.interface';
import NoteCard from './NoteCard';

const NoteList = () => {
  const { loading, error, data } = useQuery(GET_ALL_NOTES);

  if (loading)
    return (
      <Flex justify={'center'}>
        <Spinner></Spinner>
      </Flex>
    );
  if (error)
    return (
      <Flex justify={'center'}>
        <Text as="h1">Error</Text>
      </Flex>
    );

  return (
    <Flex justify={'inherit'} wrap={'wrap'} gap={'2em'}>
      {data?.notes?.map((data: INote) => {
        return (
          <NoteCard
            _id={data._id}
            title={data.title}
            content={data.content}
            key={data._id}
          />
        );
      })}
    </Flex>
  );
};

export default NoteList;
