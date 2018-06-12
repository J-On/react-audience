import React, { Component } from 'react';
import logo from './logo.svg';
import './MainUser.css';
import QuestionContainer from './QuestionContainer';
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class MainUser extends Component {
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
      <div className="MainUser">
        <header className="MainUser-header">
          <img src={logo} className="MainUser-logo" alt="logo" />
          <h1 className="MainUser-title">Welcome to React</h1>
        </header>
        <p className="MainUser-intro">
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

export default MainUser;
