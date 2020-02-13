import React from 'react';
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { updateToken } from '../token/Store.js';
import axios from 'axios';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../styles/Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      profile: {},
      email: '',
      password: '',
      login: false,
      register: false,
      error: 'none',
      errorMessage: '',

    }
    this.onLogin = this.onLogin.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.toRegister = this.toRegister.bind(this);
  }


  onLogin (e) {
    e.preventDefault();

    axios.post('http://3.120.96.16:3002/auth',
    { email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      this.setState({
        error: 'none',
        errorMessage: '',
      })
      updateToken(response.data.token);
      console.log(response);
      setTimeout(
        function() {
      this.setState({
        token: response.data.token,
        login: true,
      })
    }
    .bind(this),
    1000);
    })
  .catch((response) => {
    let error = response.toString();
    let n = error.split(" ");
    let errorCode = n[n.length - 1];

    if (errorCode === "400") {
      this.setState({
        error: 'inline',
        errorMessage: 'Error: Incorrect input (400)'
        })
      }
    if (errorCode === "401") {
      this.setState({
        error: 'inline',
        errorMessage: 'Error: Account does not exist / wrong password (401)'
        })
      }
    })
  }

  handleMailChange (e) {
    this.setState({email: e.target.value})
  }

  handlePassChange (e) {
    this.setState({password: e.target.value})
  }

  toRegister () {
    this.setState({register: true})
  }

  render () {

    let errorStyle = {
        display: this.state.error,
        color: '#e64848',
        fontWeight: 'bold',
      }

    if (this.state.login) {
      return  <Redirect to={'/todos'}></Redirect>
    }
    if (this.state.register) {
      return <Redirect to={'/register'}></Redirect>
    }
    return (
      <div className="Login">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <header className="loginHeader">
          <div className="inner-header flex">
            <div className="wrapper">
            <h1>Login</h1>
            <br></br>
            <p style={errorStyle}>{this.state.errorMessage}</p>
            <form onSubmit={this.onLogin}>
              <label>Email:</label>
              <input type="text" value={this.state.email} onChange={this.handleMailChange} name="user" required/>
              <br></br>
              <label>Password:</label>
              <input type="password" value={this.state.password} onChange={this.handlePassChange} name="pass" autoComplete="on" onSubmit={this.onLogin} required />
              <br></br>
              <p id="register-link" onClick={this.toRegister}>Don't have an account?</p>
              <div className="button-container" onClick={this.onLogin}>
                <div className="button">
                  <div tabIndex='0' onKeyDown={this.onLogin} className="icon">
                    <i> <ArrowForwardIcon /> </i>
                  </div>
                </div>
              </div>
              <button type="submit" style={{visibility: 'hidden'}}></button>
            </form>
          </div>
         </div>

          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(248,205,218,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(248,205,218,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(248,205,218,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#F8CDDA" />
              </g>
            </svg>
          </div>
        </header>
      </div>
    )
  }
}


export default Login;
