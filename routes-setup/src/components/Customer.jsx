import React from 'react'

const Customer = () => {
  return (
    <div className="customer-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1EmhrwloNaVR_TLjHfxaunp_RwIz1dPWW9sGfdVV4CGss_I5BIFPLcY&s=10" alt="Customer portrait" />
      <div className="customer-details">
        <p className="customer-name">Ali TUFAN</p>
        <p className="customer-role">Designer</p>
        <h6 className="customer-feedback">I'd suggest Macklin Motors Nissan Glasgow South to a friend .</h6>
      </div>
    </div>
  )
}

export default Customer
