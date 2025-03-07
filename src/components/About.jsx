import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3> ZenFitness: Balancing Mind and Body </h3>
          <p>ZenFitness combines physical exercise with mindfulness, focusing on both mental clarity and physical health. It blends practices like yoga and tai chi to improve strength, flexibility, and balance while promoting inner peace. This holistic approach nurtures emotional well-being and encourages a deeper connection between the body and mind for overall wellness.



.</p>

          </div>

    </div>
  )
}

export default About