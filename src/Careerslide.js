import React, { useState } from "react";
import "./css/Career.css";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import careerslidedata from "./data/Careerslidedata";

const Careerslide = () => {
  const [crdata, setCrdata] = useState(careerslidedata);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="main-career-slide">
      <div className="cslid-btn">
        <button onClick={previous} className="prv-slide">
          <FaArrowLeftLong />
        </button>
        <button onClick={next} className="nxt-slide">
          <FaArrowRightLong />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {crdata.map((item, index) => {
          return (
            <>
              <div key={index} className="">
                <div className="careerslide-box">
                  <div className="slide-box">
                    <div>
                      <img src={item.pics} className="" alt="...." />
                    </div>
                    <div>
                      <h4>{item.hd}</h4>
                      <p>{item.data}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Careerslide;
