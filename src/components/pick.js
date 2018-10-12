import React from 'react'
import GroupTable from './table.js'

function formatDataForTable(data) {
  return data.map((muscleGroup) => {
    return {
      leadColumnLabel: muscleGroup.muscle,
      dynamicColumns: muscleGroup.exercises.map((exercise) => {
        return {
          label: exercise.exercise,
          ...exercise
        }

      }),
      ...muscleGroup
    }
  })
}

const Pick = (props) => {
  const data = formatDataForTable(props.data)
  return (
    <div>
      {/* <img src={require('./bodyFeatures.svg.png')} /> */}
      <GroupTable data={data}/>
    </div>
  )

}

export default Pick
