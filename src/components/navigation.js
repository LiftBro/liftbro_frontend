import React from 'react'
import { NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/pick">Pick</NavLink>
      <NavLink className="link" to="/workouts">Workouts</NavLink>
    </div>
  )
}

export default Navigation
