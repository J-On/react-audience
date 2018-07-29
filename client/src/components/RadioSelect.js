import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

//THIS BLOCK GOES IN NewQuestion.js instead of the separate components fior Answer
// and GraphType
// <RadioSelect
//   name="graph"
//   defaultSelected={this.props.graph}
//   options={[
//     {value: 'bar', label: 'Bar Chart'},
//     {value: 'word', label: 'Word Cloud'},
//     {value: 'pie', label: 'Pie Chart'}
//   ]}
//   buttonStyle={{
//     marginBottom: 16,
//     display: 'inline-block',
//     width: '100px'
//   }}
// />
//
// <RadioSelect
//   name="answer"
//   defaultSelected={this.props.answer}
//   options={[
//     {value: 'yes_no', label: 'Yes or No'},
//     {value: 'short', label: 'Word Cloud'},
//     {value: 'long', label: 'Free Text Response'}
//   ]}
//   buttonStyle={{
//     marginBottom: 16,
//     display: 'block',
//     width: '175px'
//   }}
// />

const pStyle = {
  display: 'inline-block',
  marginRight: '20px'
}

var test = this.props.options.map((item, index) =>
  <RadioButton
    key={item.value}
    value={item.value}
    label={item.label}
    style={this.props.buttonStyle}
  />
)

//Generic Radio Button Select Group component
//Requires the following props: name, options array with value, label,
//and a buttonStyle object with CSS
class RadioSelect extends Component {
  constructor(props) {
    super(props)
  }

componentDidMount() {
  console.log(this.props.options[0].value)
  console.log(this.props.name)
}

  render() {
    return (
    <div>
      <p style={pStyle}>Graph Type</p>
      <RadioButtonGroup name={this.props.name} defaultSelected={this.props.options[0].value}>
        {this.props.options.map((item, index) =>
          <RadioButton
            key={item.value}
            value={item.value}
            label={item.label}
            style={this.props.buttonStyle}
          />
        )};
      </RadioButtonGroup>
    </div>
  )
  }

}

export default RadioSelect;
