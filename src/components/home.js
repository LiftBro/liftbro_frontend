import React from 'react'
import manMuscles from './manMuscles.jpg'
import liftBro from './liftbroLogo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/pick">
      <img className="ui centered huge image" src={require('./liftbroLogo.png')} />
      </Link>
    </div>
  );
};

export default Home
