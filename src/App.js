import {
  BrowserRouter,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import { GlobalStyle } from './global.style';
import PlanLayout from './layouts/PlanLayout';

import WelcomePage from './pages/Welcome/';
import PhoneConfirmationPage from './pages/PhoneConfimation/';
import CodeConfirmPage from './pages/CodeConfirm';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <PlanLayout>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/invite" component={PhoneConfirmationPage} />
          <Route exact path="/code_confirm" component={CodeConfirmPage} />
        </PlanLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
