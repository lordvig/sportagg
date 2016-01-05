import React from 'react';

import {Link } from 'react-router';
import auth from './auth';

class App extends React.Component{
  updateAuth(loggedIn){
    this.setState({loggedIn: loggedIn});
  }
  componentWillMount(){
    auth.onChange = this.updateAuth;
  }
  render() {
    return (
      <div className="react-app">
        <nav className="navbar navbar-default navbar-static-top navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="#" className="navbar-brand logo">SPORT<span className="mblue">AGG</span></a>
            </div>
            <div className="collapse navbar-collapse custom">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">HOME</a></li>

                <li><a href="#">EVENTS</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CONTACT US</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div style={{float: "right"}}>
            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
            <a href="/auth/logout"><button className="btn btn-primary">Logout</button></a>
          </div>
          {this.props.children}
          <h1>Hello !</h1>
          {this.state.loggedIn? (<h1>Hello {this.state.user.name}</h1>)
            : (<h1>Login using the button</h1>)}
          <div className="image-holder">
            <img src="/images/screenshot_sportagg_main.png" className="image-overlay"></img>
          </div>
        </div>
        <h1>hi</h1>
      </div>
    );
  }
  constructor(props,context){
    super(props,context);
    this.state = {
      loggedIn: false,
      user: {name:'vignesh'}
    };
    this.updateAuth = this.updateAuth.bind(this);
  }
}
class LoginPrompt extends React.Component{
  render(){
    return (<div></div>)
  }
}
export {App,LoginPrompt};
