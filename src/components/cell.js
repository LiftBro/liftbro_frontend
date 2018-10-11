import React, {Component } from 'react';
import { Icon, Label, Menu, Table} from 'semantic-ui-react';
function getLabel() {
  return (
    <label>My Label</label>
  )
}
class Cell extends Component {
  render() {
    const { label } = this.props
    return (
        <Table.Cell>
          {getLabel()}
          <Label ribbon>{label}</Label>
        </Table.Cell>

    )
  }
}

export default Cell
