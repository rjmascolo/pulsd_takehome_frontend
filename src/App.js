import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewEventForm from './forms/NewEventForm'
import EventsTable from './containers/EventTable'

class App extends Component {

  state = {
    events: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/events`).then(res => res.json()).then(events => {
      this.setState({events: events})
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <NewEventForm />
        <EventsTable events={this.state.events}/>
      </div>
    );
  }
}

export default App;
