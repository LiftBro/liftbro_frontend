import React from 'react'
import { NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pick">Pick</NavLink>
      <NavLink to="/workouts">Workouts</NavLink>
    </div>
  )
}

export default Navigation
