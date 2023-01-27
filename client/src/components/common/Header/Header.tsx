import { Flex, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import CreateNote from '../../Note/services/CreateNote';
import Nav from '../Nav/Nav';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navData] = useState([{ title: 'Create note', handler: onOpen }]);

  return (
    <Flex
      justifyContent={'space-around'}
      padding={'1em'}
      background={'rgba(0, 0, 0, 0.4)'}
      fontSize={'18px'}
      fontWeight={700}
      mb={'1em'}
    >
      <Nav navItems={navData} />
      <CreateNote isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
