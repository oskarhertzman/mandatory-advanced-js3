import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { token$, updateToken } from '../token/Store.js';
import axios from 'axios';
import '../styles/App.css';
let jwt = require('jsonwebtoken');

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
      }
    }
    this.getTodos = this.getTodos.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount () {
    this.getTodos();
  }

  getTodos () {
    this.subscription = token$.subscribe((token) => {
      console.log(token);
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
        let stateCopy = Object.assign({}, this.state);
        stateCopy.new_todo.content = response.data.todo.content;
        stateCopy.new_todo.id = response.data.todo.id;
        this.setState(stateCopy);
        console.log(this.state.new_todo)
        let joined = this.state.todos.concat(this.state.new_todo);
        this.setState({todos: joined})
        console.log(this.state.todos);
      })
    })
  }

  onDelete (e) {
    e.preventDefault();
    let targetedID = e.target.id;
    let targetedList = e.target.parentElement;
    console.log(targetedList);
    console.log(targetedID);
    axios.delete(`http://3.120.96.16:3002/todos/${targetedID}`, {
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

  render () {

    return (
      <div className="Todos">
      <Helmet>
        <title>Todos</title>
      </Helmet>
      <header>
      <h1> Logged in user: {this.state.email} </h1>
      </header>
      <form onSubmit={this.onAdd}>
      <p> Add new todo item: </p>
      <input type="text" value={this.state.input} onChange={this.onTodoChange} />
      <button type="submit" onSubmit={this.onAdd}>Submit</button>
      </form>
      <ul>
      {this.state.todos.map((items) =>
        <li id={items.id} key={items.id}>{items.content}
        <button id={items.id} onClick={this.onDelete}> Delete </button>
        </li>
      )}
      </ul>
      </div>
    )
  }
}


export default Todos;
