import React from 'react';
import imageMain from "./image/1.png";
const Home = () => {
  return (
    <div>
      <div className='container'>
        <div>
        <h1 className='tag'>We Built Magical Worlds</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum asperiores tenetur rem praesentium tempora voluptates laboriosam saepe under.</p>
        </div>
        <img className='homeimg' src={imageMain} alt=".." width="50%"/>
      </div>
    </div>
  )
}

export default Home
