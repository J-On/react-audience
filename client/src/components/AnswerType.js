import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const pStyle = {
  display: 'inline-block',
  marginRight: '20px'
}

const buttonStyle = {
  marginBottom: 16,
  display: 'inline-block',
  width: '175px'
}

class AnswerType extends Component {

  render() {
    return (
    <div>
      <p style={pStyle}>Answer Type</p>
      <RadioButtonGroup
        name='answer'
        defaultSelected={this.props.defaultSelected}
        onChange={(e) => this.props.handleRadioSelect(e, e.target.value, this.props.position, e.target.name)}
      >
        <RadioButton value='yes_no' label='Yes or No' style={buttonStyle}/>
        <RadioButton value='short' label='Short Word Answer' style={buttonStyle}/>
        <RadioButton value='long' label='Free Text Response' style={buttonStyle}/>
      </RadioButtonGroup>
    </div>
  )
  }

}

export default AnswerType;
