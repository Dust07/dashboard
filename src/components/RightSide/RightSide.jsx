import React from 'react'
import CustomerReview from '../ReusableComponents/CustomerReview/CustomerReview'
import Updates from '../ReusableComponents/Updates/Updates'
import "./RightSide.css"
import "./RightSideResponsive.css"

const RightSide = () => {
  return (
    <div className="right-side">
      <Updates />
      <CustomerReview />
    </div>
  )
}

export default RightSide