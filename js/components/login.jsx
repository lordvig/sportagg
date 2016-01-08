import React from 'react';
import {History} from 'react-router';

const Login = React.createClass({
  render(){
    return(
      <div className="container-fluid form-mid">
        <form action="/auth" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" className="form-control"/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className="form-control"/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
});
const Logout = React.createClass({
  mixins: [ History ],
  componentDidMount() {
    var history = this.history;
    $.get('/auth/logout',function(){

    }).done(function(){
      console.log("logging out");
      if(window.settings.user) window.settings.user=undefined;
      history.replaceState(null, '/');
    });
  },

  render() {
    return (<h1>Logging out</h1>);
  }
});

export {Login, Logout};
