import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {

  render() {
    return (
      this.props.todos.map(todo => {
        return <ToDoItem
                key={todo.id}
                todo={todo}
                deleteToDo={this.props.deleteToDo}
                markComplete={this.props.markComplete}
                />
      })
    )
  }
}

export default ToDoList;


// if(filterButton === 'all'){
//   return (
//     this.props.todos.map(todo => {
//       return <ToDoItem
//               key={todo.id}
//               todo={todo}
//               deleteToDo={this.props.deleteToDo}
//               markComplete={this.props.markComplete}
//               />
//     })
//   )
// } else if (filterButton === 'finished') {

// } 
