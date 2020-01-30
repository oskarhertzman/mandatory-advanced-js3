import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { token$, updateToken } from '../token/Store.js';
import axios from 'axios';
import '../styles/App.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      profile: {},
      email: '',
      password: '',
      register: false,

    }
    this.onLogin = this.onLogin.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }


  onLogin (e) {
    e.preventDefault();
    axios.post('http://3.120.96.16:3002/auth',
    { email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      updateToken(response.data.token);
      console.log(response);
      this.setState({
        success: 'inline',
        error: 'none',
      })
      setTimeout(
        function() {
      this.setState({
        token: response.data.token,
        login: true
      })
    }
    .bind(this),
    1000);
    })
  .catch((response) => {
    console.log(response);
    this.setState({
      error: 'inline',
      success: 'none' })
    })
  }

  handleMailChange (e) {
    this.setState({email: e.target.value})
  }

  handlePassChange (e) {
    this.setState({password: e.target.value})
  }

  render () {

    if (this.state.login) {
      return  <Redirect to={'/todos'}></Redirect>
    }


    return (
      <div className="Login">
      <Helmet>
        <title>Login</title>
      </Helmet>
        <h1> Login </h1>
        <form onSubmit={this.onLogin}>
          <label>
            Email:  
            <input type="text" value={this.state.email} onChange={this.handleMailChange} name="user" />
          </label>
          <br></br>
          <label>
            Password:  
            <input type="password" value={this.state.password} onChange={this.handlePassChange} name="user" />
          </label>
          <div>
          </div>
          <br></br>
          <input type="submit" value="Submit" onSubmit={this.onLogin}></input>
          <br></br>
        </form>
      </div>
    )
  }
}


export default Login;
