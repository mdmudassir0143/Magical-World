import React from 'react'
import imageAbout from "./image/2.png";
const About = () => {
  return (
    <div>
      <div className='cbout'>
        <div>
        <img className='cim' src={imageAbout} alt=".." width="50%"/>
        <h1 className='ctag'>We Built Magical Worlds</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum asperiores tenetur rem praesentium tempora voluptates laboriosam saepe under.</p>
        </div>
      </div>
    </div>
  )
}

export default About
