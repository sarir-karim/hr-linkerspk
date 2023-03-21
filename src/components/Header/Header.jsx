import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const ArrowNavBtn = () => {
  return (
    <>
      <section className="header-container">
        <nav>
          <Link className="h-home" to="/">Home</Link>
          <Link className="h-about" to="/aboutus">About Us</Link>
          <Link className="h-contact" to="/contact">FOR CONSTRUCTION COMPANIES</Link>
        </nav>
      </section>
    </>
  );
};

export default ArrowNavBtn;
