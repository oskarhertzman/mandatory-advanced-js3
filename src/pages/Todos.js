import React from 'react';
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { token$, updateToken } from '../token/Store.js';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/Todo.css';
let jwt = require('jsonwebtoken');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date().toLocaleDateString("SV-se", options);
class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      input: '',
      todos: [],
      new_todo: {
        content: '',
        id: '',
      },
      date: date,
      error: 'hidden',
      login: false,
      register: false,
      token: '',
    }
    this.getTodos = this.getTodos.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.toRegister = this.toRegister.bind(this);
    this.toLogin = this.toLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount () {
    this.getTodos();
    console.log(this.state.date)
  }

  getTodos () {
    this.subscription = token$.subscribe((token) => {
      if (token) {
      console.log(token);
      this.setState({token: token})
      let decoded = jwt.decode(token);
      console.log(decoded);
      if(decoded) {
        this.setState({email: decoded.email})
      }
        axios.get('http://3.120.96.16:3002/todos', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          this.setState({todos: response.data.todos})
          console.log(response.data.todos);
        })
      }
      else if (!this.state.token) {
        alert("Please login to use the app.")
        this.setState({login: true})
      }
    })
  }


  onTodoChange (e) {
    this.setState({input: e.target.value})
  }

  onAdd (e) {
    e.preventDefault();
    this.subscription = token$.subscribe((token) => {
    axios.post('http://3.120.96.16:3002/todos', {
      content: this.state.input }, {
      headers: {
        Authorization: 'Bearer ' + token
        }
      })
      .then((response) => {
        this.setState({
          input: '',
          error: 'hidden'
        })
        let stateCopy = Object.assign({}, this.state);
        stateCopy.new_todo.content = response.data.todo.content;
        stateCopy.new_todo.id = response.data.todo.id;
        this.setState(stateCopy);
        console.log(this.state.new_todo)
        let joined = this.state.todos.concat(this.state.new_todo);
        this.setState({todos: joined})
        this.setState({new_todo: {
          content: '',
          id: '',
        }})
        console.log(this.state.todos);
      })
      .catch((response) => {
        console.log(response)
        this.setState({error: 'visible'})
      })
    })
  }

  onDelete (e) {
    e.preventDefault();
    console.log(e.target)
    let targetedList = e.target.parentElement.parentElement.id;
    console.log(targetedList)
    axios.delete(`http://3.120.96.16:3002/todos/${targetedList}`, {
      headers: {
        Authorization: 'Bearer ' + token$.value
        }
    })
      .then((response) => {
        this.getTodos();
        console.log(response)
      })
      .catch((response) => {
        console.log(response)
      })
  }

  toRegister () {
    this.setState({register: true})
  }


  toLogin () {
    this.setState({login: true})
  }

  onLogout (e) {
    e.preventDefault();
    updateToken('');
    this.setState({login: true});

  }

  componentWillUnmount () {
    this.subscription.unsubscribe();
  }

  render () {
    if (this.state.login) {
      return  <Redirect to={'/login'}></Redirect>
    }
    return (
      <div className="Todos">
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <header className="todoHeader">
          <div className="inner-header flex">
            <h1>Welcome {this.state.email}</h1>
          </div>
          <div className="links">
          </div>
          <p id="signout" onClick={this.onLogout}>Sign out</p>
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
        <main>
          <div>
            <div className="todo">
              <div className="cardtop">
                <form onSubmit={this.onAdd}>
                  <div className="topcontent">
                    <p id="new"> Add new todo item: </p>
                    <input type="text" value={this.state.input} onChange={this.onTodoChange} style={this.state.error === 'visible' ? {border: '1px solid #f79ac3'} : {border: 'none'} } />
                    <p id="error" style={{visibility: this.state.error}}>Invalid input</p>
                    <div className="button-container" onClick={this.onAdd}>
                      <div className="button">
                        <div className="icon">
                          <i><AddIcon /> </i>
                        </div>
                      </div>
                    </div>
                    <p id="datetext">{this.state.date}</p>
                      </div>
                      </form>
              </div>
              <div className="cardbottom">
                <ul>
                  {this.state.todos.map((items) =>
                    <li id={items.id} key={items.id}>{items.content}
                      <button id={items.id} onClick={this.onDelete}>
                        <DeleteIcon />
                      </button>
                      <hr></hr>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}


export default Todos;
