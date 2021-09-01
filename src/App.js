import { ChakraProvider } from '@chakra-ui/react';
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import myNewTheme from './assets/theme'
import Dashboard from './Components/FullWebpages/Dashboard';
import DashboardFolders from './Components/FullWebpages/DashboardFolders';
import LogIn from './Components/FullWebpages/LogIn';
import MobileLogin from './Components/FullWebpages/MobileLogin';
import CreateNewStudySet from './Components/FullWebpages/CreateNewStudySet';
import StudySet from './Components/FullWebpages/StudySet'
import { AuthProvider } from './context/auth-context';

function App() {
  return (
    <ChakraProvider theme={myNewTheme}>
      <BrowserView>
        <Router>
          <Switch>
            <AuthProvider>
              {/* Login Page */}
              <Route exact path='/login' component={LogIn} />

              {/* User Page */}
              <Route exact path='/dashboard' component={Dashboard} />
              <Route path='/folders' component={DashboardFolders} />
              <Route path='/create-set' component={CreateNewStudySet} />
              <Route path='/study-set' component={StudySet} />
            </AuthProvider>
          </Switch>

        </Router>
      </BrowserView>

      <MobileView>
        <MobileLogin />
      </MobileView>

    </ChakraProvider >
  );
}

export default App;
