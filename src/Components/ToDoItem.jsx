import React from 'react';

class ToDoItem extends React.Component {

  render() {
    const { id, body, done } = this.props.todo;
    return (
      <div>
        <input 
        type="checkbox" 
        onChange={this.props.markComplete.bind(this, id)}
        checked={done ? 'checked' : ''}
        />
        {body}
        <button
          type="button"
          onClick={this.props.deleteToDo.bind(this, id)}
        > &times; </button>
      </div>
    )
  }
}

export default ToDoItem;
