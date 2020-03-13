import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import FilterButton from './FilterButton';

let toDoItems = [];
toDoItems.push({ id: 1, body: 'Apply to Sci Find', done: true });
toDoItems.push({ id: 2, body: 'Build a TODOs App', done: false });
toDoItems.push({ id: 3, body: 'Make billions', done: false });

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.setState({ todos: toDoItems });
  }

  deleteToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addToDo = (todo) => {
    let newToDo = {
      id: this.state.todos.length + 1,
      body: todo,
      done: false
    }
    this.setState({ todos: [...this.state.todos, newToDo] });
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.done = !todo.done;
        return todo;
      })
    })
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="ui container">
        <h1>To Do List</h1>
        <ToDoList
          todos={this.state.todos}
          deleteToDo={this.deleteToDo}
          markComplete={this.markComplete}
        />
        <ToDoForm
          addToDo={this.addToDo}
        />
        <FilterButton todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
