import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextEntryForm from './TextEntryForm';
import Question from './Question';
import IconSelect from './IconSelect'


const paperStyle = {
  marginTop: '50px',
  marginLeft: 20,
  marginRight: 20,
  textAlign: 'left',
};


class QuestionContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Paper style={paperStyle} zDepth={2}>
          <Question questionNumber="1" questionText="Hi I'm Question Text" />
          <Divider />
          <TextEntryForm />
          <Divider />
          <Question questionNumber="2" questionText="Hi I'm Question Text" />
          <Divider />
          <IconSelect />

        </Paper>
      </MuiThemeProvider>
    )
  }
}


export default QuestionContainer;
