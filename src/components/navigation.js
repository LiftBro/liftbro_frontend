import React from 'react'
import { NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="ui inverted borderless menu">
      <NavLink className="item" exact to="/">Home</NavLink>
      <NavLink className="item" to="/pick">Pick</NavLink>
      <NavLink className="item" to="/workouts" >Workouts</NavLink>
    </div>
  )
}

export default Navigation
