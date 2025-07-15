import './App.css';
import { ClerkProviderWithRoutes } from './auth/ClerkProviderWithRoutes.jsx';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout.jsx';
import { ChallengeGenerator } from './challenge/ChallengeGenerator.jsx';
import { HistoryPanel } from './history/HistoryPanel.jsx';
import { AuthenticationPage } from './auth/AuthenticationPage.jsx';

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route></Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
