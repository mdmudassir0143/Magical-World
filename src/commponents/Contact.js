import React from 'react'
import imageContact from "./image/3.png";
const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div>
        <h1 className='tag'>We Built Magical Worlds</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum asperiores tenetur rem praesentium tempora voluptates laboriosam saepe under.</p>
        </div>
        <img className='homeimg' src={imageContact} alt=".." width="50%"/>
      </div>
    </div>
  )
}

export default Contact
