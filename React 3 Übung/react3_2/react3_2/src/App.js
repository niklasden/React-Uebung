import React from 'react';
import Posts from './Posts'
import { Container } from '@material-ui/core'
import './App.css';


/**
 * Hauptkomponente, die als EntryPoint der Applikation dient
 */
class App extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <h1>React Übung 3</h1>
        <Posts />
      </Container>
    );
  }
}


export default App;
