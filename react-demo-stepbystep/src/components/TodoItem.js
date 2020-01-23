import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f6f6f6',
      padding: '5px',
      marginBottom: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  toggleCompleted(e) {
    console.log(this.props);
  }

  // toggleCompleted = (e) => {
  //   console.log(this.props);
  // }

  render() {
    const { id, title, completed } = this.props.todo;
    console.log(this.props);

    return (
      <div>
        <p>
          {title}
        </p>
      </div>
    )

    // return (
    //   <div style= {{backgroundColor: '#f6f6f6', textDecoration: 'line-through'}}>
    //     <p>
    //       {title}
    //     </p>
    //   </div>
    // )

    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       <input type="checkbox" defaultChecked={completed} />&nbsp;
    //       {title}
    //     </p>
    //   </div>
    // );

    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       <input type="checkbox" defaultChecked={completed} onChange={this.toggleCompleted} />&nbsp;
    //       {/* <input type="checkbox" defaultChecked={completed} onChange={this.toggleCompleted.bind(this)} />&nbsp; */}
    //       {title}
    //     </p>
    //   </div>
    // );

    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       <input type="checkbox" defaultChecked={completed} onChange={this.props.toggleCompleted} />&nbsp;
    //       {title}
    //     </p>
    //   </div>
    // );

    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       <input type="checkbox" defaultChecked={completed} onChange={this.props.toggleCompleted} value={id}/>&nbsp;
    //       {title}
    //     </p>
    //   </div>
    // );

    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       {/* <input type="checkbox" defaultChecked={completed} onChange={this.props.toggleCompleted.bind(this, id)} />&nbsp; */}
    //       <input type="checkbox" defaultChecked={completed} onChange={(e) => this.props.toggleCompleted(id)} />&nbsp;
    //       {title}
    //     </p>
    //   </div>
    // );

    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       <input type="checkbox" checked={completed} onChange={this.props.toggleCompleted.bind(this, id)} /> {' '}
    //       { title }
    //       <button style={btnStyle} onClick={(e) => this.props.deleteTodo(id)}>Löschen</button>
    //     </p>
    //   </div>
    // );
  }
}

// PropTypes
TodoItem.propTypes = {
  // todo: PropTypes.object.isRequired,
  // toggleCompleted: PropTypes.func.isRequired,
  // deleteTodo: PropTypes.func.isRequired
}

TodoItem.defaultProps = {
  todo: {
    id: -1,
    title: 'Default Todo Item',
    completed: true
  }
}

const btnStyle = {
  background: '#faab00', // orange
  color: '#fff',         // weiss
  border: 'none',        // kein Rand
  padding: '5px 10px',   // Innenabstand 5px oben und unten, 10 px links und rechts 
  borderRadius: '3px',   // Leichter Radius
  cursor: 'pointer',     // Hand als Cursor
  float: 'right'         // Rechts angeordnet
}

export default TodoItem
