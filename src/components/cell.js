import React, {Component } from 'react';
import { Icon, Label, Menu, Table} from 'semantic-ui-react';
function getLabel() {

}
class Cell extends Component {
  render() {
  
    const { label } = this.props
    return (
        <Table.Cell>
          {getLabel()}
          <Label>{label}</Label>
        </Table.Cell>

    )
  }
}

export default Cell
