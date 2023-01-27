import { Flex } from '@chakra-ui/react';
import Header from './components/common/Header/Header';
import Main from './pages/Main/Main';

function App() {
  return (
    <Flex
      direction={'column'}
      maxW={'1440px'}
      boxShadow={'0px 0px 5px gray'}
      margin={'0 auto'}
      h={'100%'}
    >
      <Header />
      <Main />
    </Flex>
  );
}

export default App;
