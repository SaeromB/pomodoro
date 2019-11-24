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

  toggleComplete = itemId => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos, todo: ''})
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  removeItems = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filer(todo => {
          return !todo.completed;
        })
      }
    }) 
  }

  addTask = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ''
    })
  }

  addLocalStorage() {
    for (let key in this.state) {
      if(localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({[key] : value})
        }
        catch(event) {
          this.setState({[key] : value})
        }
      }
    }
  }

  saveLocalStorage() {
    for(let key in this.state){
      localStorage.setItem(key, JSON.stringify(this.state[key]))
    }
  }

  componentDidMount(){
    this.addLocalStorage();
    window.addEventListener(
      'before unload',
      this.saveLocalStorage.bind(this)
    )
  }

  componentWillUnmount(){
    window.removeEventListener(
      'beforeunload',
      this.saveLocalStorage.bind(this)
    )
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
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          removeItems={this.removeItems}/>
      </div>

    )
  }
}

export default ViewTodoList