import React from "react";
import "./LabOffers.css";
import { labData } from "./labData";

const LabOffers = () => {
  return (
    <>
    <div className="laboffer-container">
      <div className="laboffer-main">
        <div className="bg-color">
          {labData.map((data, index) => (
            <div className="lab-box" key={index}>
              <span> {data.icon}</span>
              <h5>{data.heading}</h5>
              <p>{data.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

     
    </>
  );
};

export default LabOffers;
