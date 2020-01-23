
import './App.css';
import React, { Component } from 'react';
/**
  Nutze dieses Dokument um Aufgabe 1, 2, 3 und 4 abzuwickeln.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textlist: [],
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  //This function clears all Elements out of the Array
  clearlist = () => {
    this.setState({ textlist: [] })
  }

  //This function adds an item to the array by concating the element to the existing array and therfor creating a new array
  addItem = () => {
    this.setState({textlist: [...this.state.textlist,this.input.value]})    
  }

  // Delets specific Element out of the Arrays
  deleteItem(id){
    this.setState(prevState => ({
      textlist: prevState.textlist.filter(item => item !== id)
    }));
  }

render() {
  return (
    <div className="App">
      <div className="App-header">
        <p> React 2 Übung </p>
  {this.state.textlist.map(item => (<li key={item}><button onClick={this.deleteItem.bind(this,item)}>Element löschen</button>{item}</li>))}
        <div className="input">
          <input ref={(input) => this.input = input} type="text"></input>
          {/* Auf den Inhalt des Inputelements kann mithilfe von <code> this.input </code> zugegriffen werden */}
          <button onClick={this.addItem}>Element hinzufügen</button>
          <button onClick={this.clearlist}>Alle Elemente löschen</button>
        </div>
      </div>
    </div>
  );
}
}

export default App;
