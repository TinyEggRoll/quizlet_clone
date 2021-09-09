import { ChakraProvider } from '@chakra-ui/react';
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import myNewTheme from './assets/theme'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/FullWebpages/Dashboard';
import Temp from './Components/FullWebpages/Temp';
import LogIn from './Components/FullWebpages/LogIn';
import MobileLogin from './Components/FullWebpages/MobileLogin';
import CreateNewStudySet from './Components/FullWebpages/CreateNewStudySet';
import StudySet from './Components/FullWebpages/StudySet'
import { AuthProvider } from './context/auth-context';

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>
      <BrowserView>
        <AuthProvider>
          <Router>
            <Switch>
              {/* Login Page */}
              <Route exact path='/login' component={LogIn} />

              {/* User Page */}
              <PrivateRoute exact path='/' component={Temp} />
              <PrivateRoute path='/:userName/view/:container' component={Dashboard} />
              <PrivateRoute path='/create-set' component={CreateNewStudySet} />
              <PrivateRoute path='/:studySetID' component={StudySet} />
              <PrivateRoute path='/:studySetID/edit' component={StudySet} />
            </Switch>

          </Router>
        </AuthProvider>
      </BrowserView>

      <MobileView>
        <MobileLogin />
      </MobileView>

    </ChakraProvider >
  );
}

export default App;
