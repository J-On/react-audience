import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionContainer from './components/QuestionContainer';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      response: '',
      dbLocation: ''
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

      // Connects to socket.io
      const socket = io('http://localhost:3333');

      socket.on('newQuestion', (data) => {
        console.log('I am listening');
        this.setState({dbLocation: data.dbLocation});
      });
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <p>
          {this.state.dbLocation}
        </p>
        <QuestionContainer />
      </div>
    );
  }
}

export default App;
