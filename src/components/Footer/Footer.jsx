import React from "react";
import "./Footer.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { FaUsers } from "react-icons/fa";
import logo from "./logo.jpeg";
import { Link } from "react-router-dom";
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="footer-sec">
        <div className="footerheading">
          <img src={logo} alt="" />
          <p>
            Our mission is to provide the people of pakistan <br />
            better solution in order to make everyday life easier
          </p>
        </div>
        <div className="info-sec">
          <h2>Information</h2>
          <div className="info-line"></div>
          <div className="info-links">
            <div className="first-link">
              <ArrowForwardIosIcon className="ftr-icon  "/>
              <Link to="" className="ftr-link">Contact</Link>
              <ArrowForwardIosIcon className="ftr-icon  " />
              <Link to="" className="ftr-link">About Us</Link>
            </div>
            <div className="second-link">
              <ArrowForwardIosIcon className="ftr-icon  " />
              <Link to="" className="ftr-link">Terms and Condition</Link>
              <ArrowForwardIosIcon className="ftr-icon  "/>
              <Link to="" className="ftr-link">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="ofice">
          <h2>OUR OFFICE</h2>
          <div className="info-line"></div>
          <div className="footer-contact">
            <li>
              <PersonPinCircleIcon className="o-icon" />
              Flc/near-designbytesinternational
            </li>
            <li>
              <PhoneInTalkIcon  className="o-icon"/>
              0345672834
            </li>
            <li>
              <EmailIcon className="o-icon" />
              localproject@gmail.com
            </li>
            <li>
              <AccessTimeIcon className="o-icon" />
              Mon-Sat: 09:am-18:pm
            </li>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="b-main">
            <FaFacebookF className="b-icon"/>
            <FaInstagram className="b-icon"/>
            <FaTwitter className="b-icon"/>
        </div>
      </div>
    </>
  );
}

export default Footer;
