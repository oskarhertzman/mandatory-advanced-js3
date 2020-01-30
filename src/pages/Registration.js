import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { token$, updateToken } from '../token/Store.js';
import axios from 'axios';
import '../styles/App.css';


class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      profile: {},
      email: '',
      password: '',
      register: false,

    }
    this.onRegister = this.onRegister.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  onRegister (e) {
    e.preventDefault();
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
        register: true
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

    let errorMessage = {
        display: this.state.error,
        color: 'red',
        fontWeight: 'bold',
      }

    let successMessage = {
        display: this.state.success,
        color: 'green',
        fontWeight: 'bold',
      }

      if (this.state.register) {
        return  <Redirect to={'/todos'}></Redirect>
      }

    return (

      <div className="Register">
      <Helmet>
        <title>Register</title>
      </Helmet>
        <h1> Register </h1>
        <form onSubmit={this.onRegister}>
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
          <input type="submit" value="Submit" onSubmit={this.onRegister}></input>
          <br></br>
        </form>
      </div>
    )
  }
}


export default Registration;
