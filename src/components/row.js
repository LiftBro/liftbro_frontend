import React, {Component } from 'react';
import { Icon, Label, Menu, Table} from 'semantic-ui-react';
import Cell from './cell.js'
import { Redirect, Link } from 'react-router-dom'
import { browserHistory } from 'react-router'


class Row extends Component {
  constructor(props) {
    super(props)

}
  workoutList(e) {
    console.log(this.props.dynamicColumns)
    e.preventDefault()
      // this.props.dynamicColumns.map((exercises) => {
      //   let names = {
      //     exercise: exercises.label
      //   }
      //   console.log(names.exercise)
      //   return exercises
      // })
    }



render() {
    const {leadColumnLabel, dynamicColumns} = this.props
    const {exercises} = this.props
// console.log(this.props)
    if (!dynamicColumns ) return null
    return (
      <Table.Row>
        <Table.Cell onClick={(e) => this.workoutList(e)} >
          <Link to='/workouts'>{leadColumnLabel}</Link>
        </Table.Cell>
          {/* {dynamicColumns.map(cellContent => <Cell {...cellContent} key={cellContent._id}/>)} */}
      </Table.Row>
    )
  }
}

export default Row
