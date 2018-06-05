import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionContainer from './components/QuestionContainer';
// import io from './socket.io-client'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sparks Grove Audience App</h1>
        </header>

        <QuestionContainer />


      </div>
    );
  }
}

export default App;
