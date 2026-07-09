import React from 'react'

const Customer = (props) => {
  return (
    <div className="customer-card">
    <div className="customer-card1">
      <img src={props.image} alt="Customer portrait" />
      <div className="customer-details">
        <p className="customer-name">{props.name}</p>
        <h2 className="customer-role">{props.role}</h2>
        <h6 className="customer-feedback">{props.feedback}</h6>
      </div>
    </div>
    </div>

  )
}

export default Customer
