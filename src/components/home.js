import React from 'react'
import manMuscles from './manMuscles.jpg'

const Home = () => {
  return (
    <div>
      <p>This Is Home</p>
      <img src={require('./manMuscles.jpg')} />
    </div>
  );
};

export default Home
