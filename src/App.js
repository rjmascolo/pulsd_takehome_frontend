import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewEventForm from './forms/NewEventForm'

class App extends Component {
  
  state = {
    events: []
  }

  render() {
    return (
      <div className="App">
        <NewEventForm />
      </div>
    );
  }
}

export default App;
