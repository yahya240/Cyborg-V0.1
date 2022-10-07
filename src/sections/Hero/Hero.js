import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>wlecome to Cyborg</h6>
            <h4 className='hero-title'> <em>browse</em> our popular games here</h4>
            <div className='main-button'>
                <a href='browse.html'>Browse Now</a>
            </div>
        </div>  
    </div>
  )
}

export default Hero