import { Box, Text, Flex } from '@chakra-ui/react';
import { INav } from './interfaces/nav.interface';
import { useId } from 'react';

const Nav = ({ navItems }: INav) => {
  return (
    <Flex as="nav">
      {navItems?.map((data) => {
        return (
          <Box as="ul" key={useId()} listStyleType="none">
            <Text
              as="li"
              onClick={data.handler}
              cursor="pointer"
              background={'white'}
              p={'10px'}
              borderRadius={'10px'}
              border={'1px solid black'}
            >
              {data.title}
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Nav;
