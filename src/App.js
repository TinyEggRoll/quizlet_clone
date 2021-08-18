import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import LogIn from './Components/LogIn';
import myNewTheme from './assets/theme'
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import MobileLogin from './Components/MobileLogin';
import MainPage from './Components/MainPage';

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>

      <BrowserView>
        {/* <LogIn /> */}
        <MainPage />
      </BrowserView>

      <MobileView>
        <MobileLogin />
      </MobileView>

    </ChakraProvider >
  );
}

export default App;
