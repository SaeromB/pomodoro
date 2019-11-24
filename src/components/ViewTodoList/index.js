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

  inputChangeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }


  render() {
    const {todos, inputChangeHandler} = this.state
    return(
      <div>
        <h1>TodoList</h1>
        <TodoList
          todos = {todos}/>
        <TodoForm
          todos = {todos}
          inputChangeHandler = {inputChangeHandler}
          />
      </div>
    )
  }
}

export default ViewTodoList