import React, {Component } from 'react';
import { Icon, Label, Menu, Table} from 'semantic-ui-react';
import Cell from './cell.js'

class Row extends Component {
  render() {
    const {leadColumnLabel, dynamicColumns} = this.props

    if (!dynamicColumns ) return null
    console.log("here", this.props)

    return (
      <Table.Row>
        <Table.Cell>{leadColumnLabel}</Table.Cell>
          {dynamicColumns.map(cellContent => <Cell {...cellContent} key={cellContent._id}/>)}
      </Table.Row>
    )
  }
}

export default Row
