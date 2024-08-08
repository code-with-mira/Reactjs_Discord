// in src/SliderComponent.js
import React, { useState } from "react";
import "./css/Parent.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import librarydata from "./Librarydata";
const Parentslide = () => {
  const [lidata, setLidata] = useState(librarydata);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 4,
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
    <div className="main-slide">
      <div className="slide-btn">
        <button onClick={previous}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={next}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {lidata.map((item, index) => {
          return (
            <>
              <div key={index} className="">
                <img src={item.pc} alt="Slide 1" className="sl-pic" />
                <div className="sl-safty">Saftey</div>
                <div className="sl-head">{item.head}</div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Parentslide;
