import React, { Component } from 'react';
import logo from './logo.svg';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import GraphType from './GraphType'
import AnswerType from './AnswerType'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
height: 425,
width: '80%',
margin: 50,
textAlign: 'center'
};

const inlineStyle = {
  display: 'inline-block',
  marginRight: "20px"
};

const buttonStyle = {
  margin: 12,
};

class NewQuestion extends Component {


  render(props) {
    return (
      <div>
        <MuiThemeProvider>
          <Paper style={style} zDepth={1}>
            <h3 className='qNum' style={inlineStyle}>{this.props.number}</h3>
            <TextField hintText={this.props.text} />
            <GraphType defaultSelected={this.props.graph} />
            <AnswerType defaultSelected={this.props.answer} />
            <div style={{display: 'inline-block'}}>
              <RaisedButton label='Add Question' style={buttonStyle} />
              <RaisedButton label='Remove Question' style={buttonStyle} />
             </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default NewQuestion;
