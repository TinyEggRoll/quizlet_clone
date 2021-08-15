import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import LogIn from './Components/LogIn';
import LogIn2 from './Components/LogIn2';
import myNewTheme from './assets/theme'
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import MobileLogin from './Components/MobileLogin';

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>

      <BrowserView>
        <LogIn />
      </BrowserView>

      <MobileView>
        <MobileLogin />
      </MobileView>

    </ChakraProvider >
  );
}

export default App;
