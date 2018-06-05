import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import happypanda from './happypanda.svg'
import unhappypanda from './unhappypanda.svg'
import okpanda from './okpanda.svg'
// import SocialDissatisfied from 'material-ui/lib/svg-icons/social/sentiment_dissatisfied';
// import SocialSatisfied from 'material-ui/lib/svg-icons/social/sentiment_satisfied';
// import SocialVerySatisfied from 'material-ui/lib/svg-icons/social/sentiment_very_satisfied';

const fieldStyle = {
  marginLeft: 20
};

const buttonStyle = {

};

const iconStyle = {
  display: 'inline-block',
  width: 200,
  margin: 'auto'
  
};

class IconSelect extends React.Component {
  render() {


    return (
      <MuiThemeProvider>
        <div>
          <img src={happypanda} style={iconStyle}/>
          <img src={okpanda} style={iconStyle}/>
          <img src={unhappypanda} style={iconStyle}/>
          <Divider />
          <RaisedButton label="Submit" fullWidth={true} style={buttonStyle} />
        </div>
      </MuiThemeProvider>
    )
  }
}


export default IconSelect;
