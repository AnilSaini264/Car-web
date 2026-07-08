import React from 'react'

const CarDetail = () => {
  return (
    <div className="detail-wrapper">
      <div className="detail-image-box">
        <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHx8MHx8fDA%3D" alt="Luxury car" />
      </div>
      <div className="detail-content">
        <h1>Get A Fair Price For Your Car Sell To Us Today</h1>
        <p>We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of vehicle options.</p>
        <div className="detail-points">
          <p>We are the UK's provider with more patrols in more places.</p>
          <p>You get 24/7 roadside assistance.</p>
          <p>We fix 4 out of 5 cars at the roadside.</p>
        </div>
      </div>
    </div>
  )
}

export default CarDetail
