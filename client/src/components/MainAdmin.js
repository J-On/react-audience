import React, { Component } from 'react';
import logo from './logo.svg';
import './MainAdmin.css';
import NewQuestion from './NewQuestion';

class MainAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [{
        number: 1,
        text: "Test Question",
        graph: "word",
        answer: "short"
      },
      {
        number: 2,
        text: "Blah Blah",
        graph: "bar",
        answer: "yes_no"
      }]
    };
  };

  componentDidMount() {

  };

  //Need to add functions to pass to NewQuestion that updates this state when
  //changes occur - can it be one function or does it need one for each?
  //Not sure how to do the buttons and the text update

  handleAddQuestion(i) {

  }

  render() {
    if (this.state.questions.length > 0) {
      return (
        <div>
          <header className="MainAdmin-header">
            <img src={logo} className="MainAdmin-logo" alt="logo" />
            <h1 className="MainAdmin-title">Welcome to the Admin Screen</h1>
          </header>

          {this.state.questions.map(item => <NewQuestion number={item.number} text={item.text} graph={item.graph} answer={item.answer} />)}

          <NewQuestion number={this.state.questions.length + 1}/>
        </div>
      );
    }
    else {
      return (
        <div className="MainAdmin">
          <header className="MainAdmin-header">
            <img src={logo} className="MainAdmin-logo" alt="logo" />
            <h1 className="MainAdmin-title">Welcome to the Admin Screen</h1>
          </header>
            <p className="MainAdmin-intro"> Hold Up </p>
            <NewQuestion number="1" />
        </div>
      );
    }
  }
}

export default MainAdmin;
