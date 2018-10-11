import React, {Component } from 'react';
import { Icon, Label, Menu, Table} from 'semantic-ui-react';
import Row from './row.js';
import Cell from './cell.js'


class GroupTable extends Component {


  render() {
    const {data} = this.props;
    return (
  <div>
    <Table className="ui yellow table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Muscle Groups</Table.HeaderCell>
          <Table.HeaderCell>Exercises</Table.HeaderCell>
          <Table.HeaderCell>Gofuckyourself</Table.HeaderCell>
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
