import React from 'react'
import './Aboutus.css'
import { Grid } from '@material-ui/core';
import img1 from './images/about.png'
import Partner from '../Partner/Partner'

function Aboutus() {
  return (
    <section>
    <Grid >
    <div className='aboutus-heading'>
    <h1>ABOUT JS</h1>
    </div>
    <div className='about-sec'>
    <div className='about-img'>
        <img src={img1}/>
    </div>
    <div className='about-para'>
    <h1>
      OUR VISION
    </h1>
    <p>We at Labour focuse on bringing the soulation the solution to the finger tips of our consumers. we look forward to becoming a crucial part in the success of Pakistan Information Techonology industry. We will be comming with more advance solutions to help business in the future</p>

    <h3>OUR MISSION</h3>

    <p>Our mission is to provide the people of pakistan better solution in order to make everyday life easier</p>
    </div>
    </div>
    </Grid>
    <Partner/>
    </section>
  )
}

export default Aboutus;
