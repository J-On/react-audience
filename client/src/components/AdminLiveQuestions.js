import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


//Need to use .map() to build columns and rows based on props from MainAdmin
class AdminLiveQuestions extends Component {


  componentDidMount() {
    console.log(this.props.liveQuestions);
  }


  render() {
    return (
    <Table>
    <TableHeader>
      <TableRow>
          <TableHeaderColumn>Number</TableHeaderColumn>
          <TableHeaderColumn>Question</TableHeaderColumn>
          <TableHeaderColumn>Graph Type</TableHeaderColumn>
          <TableHeaderColumn>Answer Type</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {this.props.liveQuestions.map((value, index) => {
        return (<TableRow>
          <TableRowColumn>{index + 1}</TableRowColumn>
          <TableRowColumn>{this.props.liveQuestions[index].text}</TableRowColumn>
          <TableRowColumn>{this.props.liveQuestions[index].graph}</TableRowColumn>
          <TableRowColumn>{this.props.liveQuestions[index].answer}</TableRowColumn>
        </TableRow>)
      })}
    </TableBody>
  </Table>
  )}
}



export default AdminLiveQuestions;
