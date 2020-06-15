import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { ConferenceComponent } from './components/conference.component';
import { HomeComponent } from './components/home.component';

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
            <HomeComponent />
          </Route>
          <Route path="/conference">
            <ConferenceComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
