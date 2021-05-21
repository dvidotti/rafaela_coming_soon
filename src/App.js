import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from "./components/Home/Home"
import About from "./components/About/About"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
