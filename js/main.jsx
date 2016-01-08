import {App,LoginPrompt} from './components/app.jsx';
import {Login,Logout} from './components/login.jsx';
import { browserHistory, Router, Route ,IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

var wrapComponent = function(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  });
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
  document.getElementById('react-container')
);
