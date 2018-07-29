import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const pStyle = {
  display: 'inline-block',
  marginRight: '20px'
}

const buttonStyle = {
  marginBottom: 16,
  display: 'inline-block',
  width: '100px'
}

class GraphType extends Component {

  render() {
    return (
    <div>
      <p style={pStyle}>Graph Type</p>
      <RadioButtonGroup
        name='graph'
        defaultSelected={this.props.defaultSelected}
        onChange={(e) => this.props.handleRadioSelect(e, e.target.value, this.props.position, e.target.name)}
      >
        <RadioButton value='bar' label='Bar Chart' style={buttonStyle}/>
        <RadioButton value='word' label='Word Cloud' style={buttonStyle}/>
        <RadioButton value='pie' label='Pie Chart' style={buttonStyle}/>
      </RadioButtonGroup>
    </div>
  )
  }

}

export default GraphType;
