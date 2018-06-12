import React, { Component } from 'react';
import logo from './logo.svg';
import './MainAdmin.css';
import NewQuestion from './NewQuestion';

class MainAdmin extends Component {

  componentDidMount() {

  };

  render() {
    return (
      <div className="MainAdmin">
        <header className="MainAdmin-header">
          <img src={logo} className="MainAdmin-logo" alt="logo" />
          <h1 className="MainAdmin-title">Welcome to the Admin Screen</h1>
        </header>
          <p className="MainAdmin-intro"> Hold Up </p>

          <NewQuestion />
      </div>
    );
  }
}

export default MainAdmin;
