import './App.scss';
import Intro from './pages/intro/Intro';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Intro />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
