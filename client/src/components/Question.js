import React from 'react';

const numberStyle = {
  display: 'inline-block',
  fontSize: '4vw',
  marginLeft: '1vw',
  marginRight: '1vw'
};

const textStyle = {
  display: 'inline-block',
  fontSize: '4vw'
};

class Question extends React.Component {
  render() {
    return (
      <div className='questionBlock'>
        <div className='questionNumber' style={numberStyle}>
          {this.props.questionNumber}
        </div>
        <div className='questionText' style={textStyle}>
          {this.props.questionText}
        </div>
      </div>
    );
  }
}


export default Question;
