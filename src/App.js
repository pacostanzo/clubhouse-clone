import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { GlobalStyle } from './global.style';
import PlanLayout from './pages/Layouts/PlanLayout';

import WelcomePage from './pages/Welcome/Welcome.page';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <PlanLayout>
          <WelcomePage />
        </PlanLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
