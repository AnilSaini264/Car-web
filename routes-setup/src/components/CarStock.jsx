import React from 'react'

const CarStock = (props) => {
  return (
    <div className="car-card">
      <img className="car-image" src={props.image} alt={props.name} />
      <div className="car-info">
        <h2>{props.name}</h2>
        <p className="car-detail">4.0 D5 PowerPulse Momentum 5dr AW....</p>
        <div className="car-features">
          <p>{props.b1}</p>
          <p>{props.b2}</p>
          <p>{props.b3}</p>
        </div>
        <div className="car-footer-row">
          <h3>{props.price}</h3>
          <button>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default CarStock
