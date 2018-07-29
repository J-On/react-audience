import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import MainUser from './components/MainUser';
import MainAdmin from './components/MainAdmin';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/admin' component={MainAdmin} />
        <Route path='/user' component={MainUser} />
      </Switch>
    );
  }
}

export default App;
