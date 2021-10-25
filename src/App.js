import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const list = [
  {
    task: 'Clean Car',
    id: 1,
    completed: false,
  },

  {
    task: 'Get Gecko Food',
    id: 2,
    completed: false,
  },
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  handleChanges = (event) => {
    this.setState({
      ...this.state,
      newTask: event.target.value,
    });
  };

  addTodo = (todoName) => {
    this.setState({
      ...this.state,
      list: [
        ...this.state.list,
        {
          task: todoName,
          id: Date.now(),
          completed: false,
        }
      ]
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTask);
  };

  toggleCompleted = (todoId) => {
    const updateTodoList = this.state.list.map(todo => {
      if (todo.id === todoId) {
        return {...todo, completed: !todo.completed};
      }else{
        return todo;
      }
    });
    this.setState({
      ...this.state,
      list: updateTodoList
    });
  };

  clearCompleted = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm submitTodo = {this.submitTodo} addTodoTask = {this.addTodoTask} todoInput = {this.todoInput} handleChanges = {this.handleChanges} />
        <div>
          <TodoList todoList = {this.state.list} toggleItem = {this.toggleItem} clearCompleted = {this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
