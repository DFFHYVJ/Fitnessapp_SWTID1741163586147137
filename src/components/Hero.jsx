import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>ZEN FITNESS</h5>
        </span>
        <h2>Push Yourself <b>Because</b> No One Else Is <b>Going To Do </b> For You </h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero