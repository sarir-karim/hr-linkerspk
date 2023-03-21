import React from 'react'
import {FaUsers} from 'react-icons/fa'
import './Partner.css'
const Partner = () => {
  return (
    <div>
      <div className="about-first-sec">
        <FaUsers className="a-icon" />
        <div className="a-headpara">
          <h5>Want To Be A Partner With Us?</h5>
          <span>
            Call us at our customer services for more information. We will be
            glad to have you as a partner with us!
          </span>
        </div>
      </div>
    </div>
  )
}

export default Partner
