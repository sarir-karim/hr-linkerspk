import React, { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Slider from "react-slick";
import "./HomeCarousel.css";

const HomeSlide = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          gap: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="home-container">
        <Slider {...settings} ref={setSliderRef} className="home-slider">
          <div className="home-images">
            <div className="home-car">
              <img src="https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" />
            </div>
            <div className="home-desc">
                <h1><span className="yellow">we do</span>  Big Things. </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab officia facilis voluptates tempora culpa sapiente laudantium inventore doloribus nobis!</p>
            </div>
          </div>
          <div className="home-images">
            <div className="home-car">
              <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" />
            </div>
            <div className="home-desc">
                <h1><span className="yellow">Our</span>  Team </h1>
            </div>
          </div>
          <div className="home-images">
            <div className="home-car">
              <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" />
            </div>
            <div className="home-desc">
                <h1>We Are <span className="yellow">henanZHONGZHENG Construction  Company</span></h1>
            </div>
          </div>
          <div className="home-images">
            <div className="home-car">
              <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/06/importexport1.jpg" alt="" width="100%" />
            </div>
            <div className="home-desc">
                <h1>We Do <span className="yellow">Import Export</span></h1>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeSlide;
