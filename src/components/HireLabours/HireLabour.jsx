import React from 'react'
import './HireLabour.css';
import {FiPhoneCall} from 'react-icons/fi'
import img1 from './img/img.png'
const HireLabour = () => {
  return (
    <div className='skilled-labour'>
        <div className="skill-text">
            <h2 className='skill-head'>Hire The Skilled Labour Near You. Sign-Up Process</h2>
            <h5 className='skill-subhead'>For Labour Seeker</h5>
            <p className='skill-para'>If you are an individual looking for an immediate skilled worker assistance, download the Labour2  application from google play/ google store and sign-up using the GENERAL LABOUR option. Simply, put your information it requires to allow the necessary access and start finding the labour you require.</p>
            <h5 className='skill-subhead'>For Skilled Labour</h5>
            <p className='skill-para'>If you are a skilled labour, download the Labour2  application using google play store/google store and sign-up using the CONTRACTOR option. Simply, put all the information required following the installation wizard. Sign-up will require you to upload a scanned copy of your NATIONAL IDENTIFICATION NUMBER and a scanned copy of UTILITY BILL where you do your business. On submission, it will be reviewed and a follow-up call will be made in order to confirm your information. After verification, your profile will be live to accept the online jobs near you using the Labour2  application.</p>
        </div>
        <div className="skill-info">
            <img src={img1} alt="" />
           <div className="skill-bg">
           <div className="skill-call">
            Call us today for more information!
            </div>
            <div className='skill-line'></div>
            <div className='skill-num'><FiPhoneCall/>+92-344-9449090</div>
           </div>
        </div>
    </div>
  )
}

export default HireLabour
