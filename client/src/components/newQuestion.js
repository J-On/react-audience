import React, { Component } from 'react';
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
            <h3 className='qNum' style={inlineStyle}>{this.props.position + 1}</h3>
            <TextField
              className='questionText'
              hintText={'Type a Question'}
              onChange={this.props.handleText}
              value={this.props.text}
            />
            <GraphType defaultSelected={this.props.graph} />
            <AnswerType defaultSelected={this.props.answer} />
            <div style={{display: 'inline-block'}}>

              <RaisedButton label='Remove Question'
              style={buttonStyle}
              onClick={this.props.handleRemoveQuestion}
              data-position={this.props.position}
              />
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default NewQuestion;
