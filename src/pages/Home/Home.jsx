import React from 'react'
import LabOffers from '../../components/LabOffers/LabOffers';
import HireLabour from '../../components/HireLabours/HireLabour';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Services from '../../components/OurServices/Services';
import {FaUsers} from 'react-icons/fa';
import './Home.css'

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <HireLabour />
      <LabOffers/>  
      <Services/>
      <div className="home-first-sec">
        <FaUsers className="h-icon" />
        <div className="h-headpara">
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

export default Home
