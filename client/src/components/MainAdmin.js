import React, { Component } from 'react';
import logo from './logo.svg';
import './MainAdmin.css';
import NewQuestion from './NewQuestion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const buttonDivStyle = {
  margin: 10,
  display: 'block',
  textAlign: 'center',
}


class MainAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    };
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRadioSelect = this.handleRadioSelect.bind(this);
  };

  //Adds a starter question if no questions saved in state
  componentDidMount() {
    if (this.state.questions.length === 0) {
      this.handleAddQuestion();
    }
  };

  //Function passed to TextField onChange
  //Updates the MainAdmin state as the text changes
  handleTextChange(e, textData, position) {
    const newState = {questions: this.state.questions.slice()};
    const questionText = textData;
    newState.questions[position].text = questionText;
    console.log('new content = ',newState.questions[position].text);
    this.setState(newState);
  }

  //Function passed to Add Question button
  //Creates a new array entry in the MainAdmin state
  //which adds a new question box
  handleAddQuestion(e) {
    const newState = {questions: this.state.questions.slice()};
    newState.questions.push({
      text: "",
      graph: "bar",
      answer: "yes_no"
    });
    this.setState(newState);
    console.log('i\'m working!');
  };

  //Function passed to Remove Question button
  //Takes the position of the question and removes from the array
  handleRemoveQuestion(e, position) {
    const newState = {questions: this.state.questions.slice()};
    console.log('Removing question: ',newState.questions[position].text);
    console.log('position removed is ', position);
    newState.questions.splice(position, 1);
    this.setState(newState);
  };

  //Function passed to radio buttons
  //Takes selection and passes into MainAdmin state based on position
  handleRadioSelect(e, value, position, type) {
    const newState = {questions: this.state.questions.slice()};
    newState.questions[position][type] = value
    console.log('new radio value', newState.questions[position], ': ', newState.questions[position][type])
  }

  render() {
      return (
        <div>

          <header className="MainAdmin-header">
            <img src={logo} className="MainAdmin-logo" alt="logo" />
            <h1 className="MainAdmin-title">Welcome to the Admin Screen</h1>
          </header>

          <MuiThemeProvider>
            <div>
              {this.state.questions.map((item, index) =>
                <NewQuestion
                  key={index}
                  position={index}
                  text={item.text}
                  graph={item.graph}
                  answer={item.answer}
                  handleRemoveQuestion={this.handleRemoveQuestion}
                  handleTextChange={this.handleTextChange}
                  datasetInHierarchy={this.datasetInHierarchy}
                  handleRadioSelect={this.handleRadioSelect}
                />
              )};


              <div style={buttonDivStyle}>
                <RaisedButton label='Add Question' onClick={this.handleAddQuestion}/>
              </div>
            </div>
          </MuiThemeProvider>
        </div>
      );
  }


}

export default MainAdmin;
