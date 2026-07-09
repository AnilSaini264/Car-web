import React from 'react'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-content">
        <p className="hero-subtitle">Find cars for sale and for rent near you</p>
        <h1>Find Your Perfect Car</h1>
        <div className="hero-filters">
          <p>Any Makers</p>
          <p>Any Models</p>
          <p>All Prices</p>
          <button>Search Cars</button>
        </div>
        <p className="hero-featured-label">Or browse featured models</p>
        <div className="hero-models">
          <p>suv</p>
          <p>Sedan</p>
          <p>Hatchback</p>
          <p>Coupe</p>
          <p>Hybrid</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
