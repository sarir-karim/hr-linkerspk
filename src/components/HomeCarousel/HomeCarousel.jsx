import React, { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Slider from "react-slick";
import "./HomeCarousel.css";

let img1 =
  "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let img2 =
  "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let img3 =
  "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
              <img src={img1} alt="" width="100%" />
            </div>
            <div className="home-desc">
              <h1>
                Finding <span className="yellow">Skilled Labour </span>
                Was Never So Easy{" "}
              </h1>
              <p>
                Finding the skilled labour can be sometimes pain in the neck.
                Especially, when you need immediate assistance. For Example, an
                electric circuit burn, plumbing leaks and installation of
                electric appliances such as air-condition would require
                immediate assistance and it takes time to walk out of the house
                or your office and find the skilled labour negotiate with them
                losing all the precious time that you could utilize if you had
                an immediate solution to find
                <button className="h-btn">Learn More</button>
              </p>
            </div>
          </div>
          <div className="home-images">
            <div className="home-car">
              <img src={img2} alt="" width="100%" />
            </div>
            <div className="home-desc">
              <h1>
              We are   <span className="yellow"> HR Linkers</span> {" "}
              </h1>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, facilis.
                <button className="h-btn">Learn More</button>
              </p>
            </div>
          </div>
          <div className="home-images">
            <div className="home-car">
              <img src={img3} alt="" width="100%" />
            </div>
            <div className="home-desc">
              <h1>
                We Hire{" "}
                <span className="yellow">
                  Skilled Labours
                </span>
              </h1>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, facilis.
                <button className="h-btn">Learn More</button>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeSlide;
