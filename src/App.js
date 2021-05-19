import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import { GlobalStyle } from './global.style';
import PlanLayout from './layouts/PlanLayout';
import AppLayout from './layouts/AppLayout';

import WelcomePage from './pages/Welcome/';
import PhoneConfirmationPage from './pages/PhoneConfimation/';
import CodeConfirmPage from './pages/CodeConfirm';
import AllowNotificationPage from './pages/AllowNotification';
import HomePage from './pages/Home';
import ExplorePage from './pages/Explore';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Route
          exact
          path={['/', '/invite', '/code_confirm', '/allow_notification']}
        >
          <PlanLayout>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/invite" component={PhoneConfirmationPage} />
              <Route exact path="/code_confirm" component={CodeConfirmPage} />
              <Route
                exact
                path="/allow_notification"
                component={AllowNotificationPage}
              />
            </Switch>
          </PlanLayout>
        </Route>
        <Route exact path={['/home', '/explore']}>
          <AppLayout>
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/explore" component={ExplorePage} />
            </Switch>
          </AppLayout>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
