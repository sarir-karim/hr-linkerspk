import React, { useRef, useState } from 'react'
import { Grid } from "@material-ui/core";
import "./Constraction.css";
import PhoneIcon from '@material-ui/icons/Phone';
import HouseIcon from '@material-ui/icons/House';
import Partner from '../Partner/Partner'
import emailjs from '@emailjs/browser';


function Constraction() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_df3tobq', 'template_qo17jam', form.current, 'T5Sm11VjBIZbrTb0A')
      .then((result) => {
        alert("Message Sent Successfully")
      }, (error) => {
        alert("Please fill all the input fields")
      });
  };
  return (
    <div>
      <div className="Constraction-Main">
        <h1>
          Contractors / Builders Contact Our Customer Support For <br />{" "}
          Corporate Sign-Up
        </h1>
      </div>
      <div className="Constraction-Text">
        <h2>Why HRLinkers</h2>
        <p> We are a company that provides specialized labor services for under-construction projects. Our team is dedicated to helping you find the best-skilled workers for your project at a cost that is less than average labor hired via agents.

          Our sophisticated system is designed to allow you to browse and select the labor that is nearby your project, saving you time and money. We understand how important it is to have skilled workers on your construction site, which is why we only provide workers who are highly trained and experienced in their field.

          If you have any questions about our services or would like to book an appointment, please don't hesitate to contact our customer support team. We are always here to help you and provide you with the best labor services possible. Thank you for considering HRLinkers for your under-construction project needs.


        </p>
      </div>
      <Grid container  >
        <Grid item lg={8} sm={12}>
          <div className="Contaer1" >

            <h3>Send Us A Message</h3>

            <form ref={form} onSubmit={sendEmail}>
              <div class="container">
                <input className="FormText" type="text" id="fname" name="fullname" placeholder="Name*" />
                <input className="FormText-1" type="text" id="Cname" name="companyName" placeholder="Company Name" />
              </div>
              <div class="container">
                <input className="FormText" type="tel" id="phone" name="phone" placeholder="Number"  />
                <input className="FormText-1" type="text" id="email" name="email" placeholder="Email*" />
              </div>
              <input className="FormText-2" type="text" id="Address" name="address" placeholder="Address*" />
              <textarea className="FormText-3" id="text" name="message" placeholder="  Your message*" />
              <div>
                <button type="submit">SEND MESSAGE</button>
              </div>
            </form>
          </div>

        </Grid>
        <Grid item lg={3} sm={12}>
          <div className="card">
            <div className="Main-Txt">
              <h1>Call us today for<br /> some special offers!</h1>
            </div>
            <div className="main-card">
              <div className="icon">
                <PhoneIcon />
              </div>
              <div className="card-txt">
                <h1>+92-344-9449090</h1>
                <p>info@laboursquare.com</p>
              </div>
            </div>
            <div className="main-card">
              <div className="icon">
                <HouseIcon />
              </div>
              <div className="card-txt">
                <h1>FL 4/10 Gulshan-E-<br />Iqbal Block-5</h1>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Partner />


    </div>
  );
}

export default Constraction;
