import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { navItems } from './helpers/helpers';
import ComingSoonPage from './pages/ComingSoonPage.js/ComingSoonPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/proximamente" exact>
            <ComingSoonPage />
          </Route>
        </Switch>

        <Navbar items={navItems} />
      </Router>
    </div>
  );
};

export default App;
