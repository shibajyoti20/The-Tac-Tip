import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
