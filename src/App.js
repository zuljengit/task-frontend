import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/home.';
import Conference from './components/conference';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/conference">Conference</Link>
          </li>
        </ul>

        <hr />

        {}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/conference">
            <Conference />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
