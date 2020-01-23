import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== '') {
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    } 
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flexGrow: '10', padding: '5px', marginTop: '10px', marginBottom: '10px'}}
          placeholder="ToDo hinzufügen..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Hinzufügen" 
          className="btn"
          style={{flexGrow: '1'}}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
