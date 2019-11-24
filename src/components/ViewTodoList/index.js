import React, {Component} from 'react';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

class ViewTodoList extends Component {
  state = {
    todos: [{
      //task: '',
      //id: '',
      //completed: false
    }],
    todo: ''
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTask = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoForm
          todos={this.state.todos}
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}/>
        <TodoList
          todos={this.state.todos}/>
      </div>

    )
  }
}

export default ViewTodoList