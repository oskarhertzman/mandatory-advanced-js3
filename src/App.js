import React from 'react';
import Login from './pages/Login.js';
import Registration from './pages/Registration.js';
import Todos from './pages/Todos.js';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './styles/App.css';

class App extends React.Component {


  render () {

    let redirect;
    if (window.location.pathname === "/") {
      redirect = <Redirect to="/login" />
    }

    return (
      <HelmetProvider>
        <Router>
          {redirect}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/todos" component={Todos} />
      </Router>
    </HelmetProvider>
    )
  }
}


export default App;
