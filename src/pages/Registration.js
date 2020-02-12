import React from 'react';
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { updateToken } from '../token/Store.js';
import axios from 'axios';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../styles/Register.css';


class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      profile: {},
      email: '',
      password: '',
      repeat: '',
      register: false,
      login: false,
      error: 'none',
      errorMessage: '',

    }
    this.onRegister = this.onRegister.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleRepeatChange = this.handleRepeatChange.bind(this);
    this.toLogin = this.toLogin.bind(this);
  }

  onRegister (e) {
    e.preventDefault();
    if (this.state.repeat !== this.state.password) {
      this.setState({errorMessage: 'Password does not match.'})
      return;
    }
    axios.post('http://3.120.96.16:3002/register',
    { email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      return axios.post('http://3.120.96.16:3002/auth',
      { email: this.state.email,
        password: this.state.password
      });
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
        register: true,
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
        errorMessage: 'Incorrect input (400)'
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

  handleRepeatChange (e) {
    this.setState({repeat: e.target.value});
  }

  toLogin () {
      this.setState({login: true})
  }


  render () {

    let errorStyle = {
        display: this.state.error,
        color: '#e64848',
        fontWeight: 'bold',
      }

      if (this.state.register) {
        return  <Redirect to={'/todos'}></Redirect>
      }

      if (this.state.login) {
        return <Redirect to={'/login'}></Redirect>
      }

    return (

      <div className="Register">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <header className="registerHeader">
          <div className="inner-header flex">
            <div className="wrapper">
            <h1>Register</h1>
            <br></br>
            <p style={errorStyle}>{this.state.errorMessage}</p>
            <form onSubmit={this.onRegister}>
              <label>Email:</label>
              <input type="text" value={this.state.email} onChange={this.handleMailChange} name="user" required />
              <br></br>
              <label>Password:</label>
              <input type="password" value={this.state.password} onChange={this.handlePassChange} name="pass" autoComplete="on" required/>
              <br></br>
              <label>Repeat password:</label>
              <input type="password" value={this.state.repeat} onChange={this.handleRepeatChange} name="repeatpass" autoComplete="on" required />
              <br></br>    
              <p id="login-link" onClick={this.toLogin}>Already have an account?</p>
              <div className="button-container" onClick={this.onRegister}>
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


export default Registration;
