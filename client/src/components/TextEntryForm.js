import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const fieldStyle = {
  marginLeft: 20
};

const buttonStyle = {

};

class TextEntryForm extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField hintText="Question One Answer" style={fieldStyle} underlineShow={false} />
          <Divider />
          <RaisedButton label="Submit" fullWidth={true} style={buttonStyle} />
        </div>
      </MuiThemeProvider>
    )
  }


}


export default TextEntryForm;
