import React, {Component } from 'react';
import { Icon, Label, Menu, Table} from 'semantic-ui-react';
import Row from './row.js';
import Cell from './cell.js'
import { Redirect } from 'react-router-dom'

class GroupTable extends Component {
  constructor(props) {
    super(props);
}
  render() {
    const {data} = this.props;
    return (
  <div>
    <Table className="ui selectable large inverted teal table segment">
      <Table.Header>
        {/* <Table.Row onClick={this.workoutList(event)}> */}
        <Table.Row >
          <Table.HeaderCell colSpan="4">Muscle Groups</Table.HeaderCell>
          {/* <Table.HeaderCell colSpan="8">Exercises</Table.HeaderCell> */}
        </Table.Row>
      </Table.Header>

      <Table.Body>
          {data.map(rowData => <Row {...rowData} key={rowData._id}/> )}
      </Table.Body>
    </Table>
  </div>
)
}
}


export default GroupTable
