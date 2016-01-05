import {App,LoginPrompt} from './components/app.jsx';
import {Login} from './components/login.jsx';
import { browserHistory, Router, Route ,IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LoginPrompt}/>
      <Route path="login" component={Login} />
    </Route>
  </Router>,
  document.getElementById('react-container')
);
