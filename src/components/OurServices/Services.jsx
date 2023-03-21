import React from "react";
import "./Services.css";
import { serviceData } from "./serviceData";
const Services = () => {
  return (
    <div>
      <div className="lab-services">
        <h5>Our Services At HR-Linkers</h5>
        <p>
          From complete turn key to project manager. Leave the building to the
          professionals.
        </p>
      </div>

      <div className="services-container">
        {serviceData.map((data, index) => (
          <div className="service-card" key={index}>
            <img src={data.img} alt="" />
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
