import React from 'react';
import Home from './containers/Home'
import Detail from './containers/Detail'
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/detail">Detail</Link>
            </li>
            <li></li>
          </ul>
        </nav>

          <Switch>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
               <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
