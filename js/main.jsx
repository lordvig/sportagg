import {App,LoginPrompt} from './components/app.jsx';
import {Login,Logout} from './components/login.jsx';
import { browserHistory, Router, Route ,IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LoginPrompt}/>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
    </Route>
  </Router>,
  document.getElementById('react-container')
);
// export function render(){
//   ReactDOM.render(
//     <App/>
//     ,document.getElementById('react-container')
//   );
// }
// render();
