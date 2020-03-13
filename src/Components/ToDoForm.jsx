import React from 'react';

class ToDoForm extends React.Component {
  state = {title: ''}

  onInputChange = (e) => {
    this.setState({title: e.target.value});
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return(
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div>
            <label>Add To Do </label>
              <input 
                type="text"
                onChange={this.onInputChange}
                value={this.state.title}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default ToDoForm;
