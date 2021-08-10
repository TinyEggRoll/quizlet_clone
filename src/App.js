import React from 'react';
import {
  Button,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button variant='solid' colorScheme='red'> Test</Button>
    </ChakraProvider>
  );
}

export default App;
