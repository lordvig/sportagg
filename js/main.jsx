import {App,MainContent} from './components/app.jsx';
import {Login,Logout} from './components/login.jsx';
import { browserHistory, Router, Route ,IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/logout' component={Logout}/>
      <IndexRoute component={MainContent}/>
    </Route>
    <Route path='/login' component={Login}/>
  </Router>,
  document.getElementById('react-container')
);
