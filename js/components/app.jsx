import React from 'react';
import {Link } from 'react-router';

class App extends React.Component{
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
            <Link to="login"><button className="btn btn-primary">Login</button></Link>
            <Link to="logout"><button className="btn btn-primary">Logout</button></Link>
          </div>
          {this.props.children}

          <div className="image-holder">
            <img src="/images/screenshot_sportagg_main.png" className="image-overlay"></img>
          </div>
        </div>
      </div>
    );
  }
  constructor(props,context){
    super(props,context);
  }
}
App.propTypes = {
  children: React.PropTypes.node
};
class MainContent extends React.Component{
  render(){
    return(
      <div className="main-content">
        <h1>Hello !</h1>
        {window.settings.user ? (<h1>Hello {window.settings.user.username}</h1>)
          : (<h1>Login using the button</h1>)}
      </div>
    );
  }
}
export {App, MainContent};
