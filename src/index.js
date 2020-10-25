import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './index.css';
import HomePage from './App';
import MeetingGuide from './MeetingGuide';
import * as serviceWorker from './serviceWorker';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/meeting-guide">
        <MeetingGuide />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
