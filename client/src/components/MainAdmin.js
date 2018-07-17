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
//   {
//   text: "Test Question",
//   graph: "word",
//   answer: "short"
// },
// {
//   text: "Blah Blah",
//   graph: "bar",
//   answer: "yes_no"
// }

// <NewQuestion
//   key={this.state.questions.length}
//   position={this.state.questions.length}
//   handleText={this.handleText}
//   handleRemoveQuestion={this.handleRemoveQuestion}
// />

class MainAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    };
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
  };

  componentDidMount() {
    if (this.state.questions.length === 0) {
      {this.handleAddQuestion()}
    }
  };

  handleTextChange(event) {
    // const newText = event.target.value;
    // newQuestions = this.state.questions.splice();
    // newQuestions.text = newText;
    // this.setState({change: event.target.value})
    this.setState({

    });
  };

// Can use push and pop? for adding and removing items, based on textfield

  handleAddQuestion(e) {
    const newState = {questions: this.state.questions.slice()};
    newState.questions.push({
      text: "",
      graph: "bar",
      answer: "yes_no"
    });
    this.setState(newState);
    console.log('i\'m working!')
  };

  handleRemoveQuestion(e) {
    const newState = {questions: this.state.questions.slice()};
    const position = e.target.dataset.position;
    console.log('Removing');
    newState.questions.splice(position, 1);
    this.setState(newState);
  };


  // OLD render() {
  //   if (this.state.questions.length > 0) {
  //     return (
  //       <div>
  //
  //         <header className="MainAdmin-header">
  //           <img src={logo} className="MainAdmin-logo" alt="logo" />
  //           <h1 className="MainAdmin-title">Welcome to the Admin Screen</h1>
  //         </header>
  //
  //         <MuiThemeProvider>
  //           <div>
  //             {this.state.questions.map((item, index) =>
  //               <NewQuestion
  //                 key={index}
  //                 position={index}
  //                 text={item.text}
  //                 graph={item.graph}
  //                 answer={item.answer}
  //                 handleRemoveQuestion={this.handleRemoveQuestion}
  //               />
  //             )};
  //
  //
  //             <div style={buttonDivStyle}>
  //               <RaisedButton label='Add Question' onClick={this.handleAddQuestion}/>
  //             </div>
  //           </div>
  //         </MuiThemeProvider>
  //       </div>
  //     );
  //   }
  //   else {
  //     return (
  //       <div className="MainAdmin">
  //         <header className="MainAdmin-header">
  //           <img src={logo} className="MainAdmin-logo" alt="logo" />
  //           <h1 className="MainAdmin-title">Welcome to the Admin Screen</h1>
  //         </header>
  //           <p className="MainAdmin-intro"> Hold Up </p>
  //           <MuiThemeProvider>
  //           <div>
  //               {this.handleAddQuestion()}
  //
  //               {this.state.questions.map((item, index) =>
  //                 <NewQuestion
  //                   key={index}
  //                   position={index}
  //                   text={item.text}
  //                   graph={item.graph}
  //                   answer={item.answer}
  //                   handleRemoveQuestion={this.handleRemoveQuestion}
  //                 />
  //               )};
  //
  //               <div style={buttonDivStyle}>
  //                 <RaisedButton label='Add Question'/>
  //               </div>
  //             </div>
  //           </MuiThemeProvider>
  //       </div>
  //     );
  //   }
  // }

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
