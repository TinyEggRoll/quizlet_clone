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

      {/* Browser Pages */}
      <BrowserView>
        <AuthProvider>
          <Router>
            <Switch>
              {/* Login Page */}
              <Route exact path='/login' component={LogIn} />

              {/* All User Pages */}

              {/* Redirect Page To Allow For Firebase Access */}
              <PrivateRoute exact path='/' component={Temp} />
              {/* HomePage/ List of Study Sets */}
              <PrivateRoute path='/:userName/view/:container' component={Dashboard} />
              {/* Create Study Set Page*/}
              <PrivateRoute path='/create-set' component={CreateNewStudySet} />
              {/* Edit Study Set Page */}
              <PrivateRoute path='/:studySetID/edit' component={CreateNewStudySet} />
              {/* Access Specific Study Set Page */}
              <PrivateRoute path='/:studySetID' component={StudySet} />
            </Switch>

          </Router>
        </AuthProvider>
      </BrowserView>

      <MobileView>
        {/* Mobile Page For Mobile Users */}
        <MobileLogin />
      </MobileView>

    </ChakraProvider >
  );
}

export default App;
