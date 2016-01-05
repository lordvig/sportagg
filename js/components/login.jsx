import auth from './auth';
import React from 'react';
import {History} from 'react-router'

const Login = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(event) {
    event.preventDefault()
    const username = this.refs.username.value
    const pass = this.refs.pass.value
    auth.login(username, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })
      const { location } = this.props
      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname)
      } else {
        this.history.replaceState(null, '/')
      }
    })
  },

  render(){
    return(<div className="container-fluid form-mid">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" ref="username" name="username" className="form-control"/>
          <label htmlFor="password">Password:</label>
          <input type="password" ref="pass" name="password" className="form-control"/>
          <button type="submit" className="btn btn-primary">Submit</button>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </div>
      </form>
    </div>);
  }
})
export {Login};
