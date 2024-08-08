import React, { useState } from "react";
import "./css/Career.css";
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Careersld2 = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
    <div className="">
      <div className="slidetwo-btn">
        <button onClick={previous} className="sld-btn-pr">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="sld-btn-nx">
          <FaChevronRight />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        <div className="slide-second">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/628650f3ce763a9eb06ab37f_417633f0198c1c33285610e7978a13b7.webp"
            alt="slidepic"
            className=""
          />
        </div>
        <div className="slide-second">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/628650f6e7e2c273b8007cb2_c97b39d645fa53ffd4efd9f9f84e2398.webp"
            alt="slidepic"
            className=""
          />
        </div>
        <div className="slide-second">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/628650f7faf45beed90bf573_157083b6c30ce511c34653049b8ac0e1.webp"
            alt="slidepic"
            className=""
          />
        </div>
        <div className="slide-second">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/628650f63f5d815b0f858ea9_4e02c7c5f23caa526b88ec7aafd3e946.webp"
            alt="slidepic"
            className=""
          />
        </div>
        <div className="slide-second">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/628650f4c8d6ff08d5a3d2b1_c20cc1c85b0b1822a2b34f03c228db9c-p-800.webp"
            alt="slidepic"
            className=""
          />
        </div>
        <div className="slide-second">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/628650f82baf3a30cc61bb95_629c4fa1cfc1c4fc5c5af1f41b95cec1-p-800.webp"
            alt="slidepic"
            className=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Careersld2;
